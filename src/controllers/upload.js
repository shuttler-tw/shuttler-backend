const config = require('../config');
const { S3Client, PutObjectCommand, S3ServiceException } = require('@aws-sdk/client-s3');
const logger = require('../utils/logger')('Upload');
const appError = require('../utils/appError');
const { dataSource } = require('../db/data-source');
const { v4: uuidv4 } = require('uuid');

// 設定 aws 金鑰, 如果沒有設定則使用 IAM Role
const credentials =
  config.get('aws.accessKeyId') && config.get('aws.secretAccessKey')
    ? {
        accessKeyId: config.get('aws.accessKeyId'),
        secretAccessKey: config.get('aws.secretAccessKey'),
      }
    : undefined;

const s3 = new S3Client({
  region: config.get('aws.region'),
  credentials,
});

const uploadToS3 = async ({ key, body, contentType }) => {
  await s3.send(
    new PutObjectCommand({
      Bucket: config.get('aws.bucketName'),
      Key: key,
      Body: body,
      ContentType: contentType,
    }),
  );
  return `https://${config.get('aws.bucketName')}.s3.${config.get('aws.region')}.amazonaws.com/${key}`;
};

const uploadController = {
  uploadImage: async (req, res, next) => {
    try {
      const { files } = req;
      const { id } = req.user;
      const { uploadType } = req.body;

      // 驗證有傳入上傳種類參數
      if (!uploadType) {
        logger.warn('上傳圖片錯誤:', '缺少上傳類型');
        return next(appError(400, '缺少上傳類型'));
      }

      // 驗證檔案類型
      if (!files || req.files.length === 0) {
        logger.warn('上傳圖片錯誤:', '沒有檔案上傳');
        return next(appError(400, '沒有檔案上傳'));
      }

      const uploadStrategies = {
        avatar: async () => {
          const file = files[0];
          const url = await uploadToS3({
            key: `avatar/${id}`,
            body: file.buffer,
            contentType: file.mimetype,
          });

          const userRepo = dataSource.getRepository('Members');
          const user = await userRepo.findOne({ where: { id } });

          if (!user) {
            logger.warn('上傳圖片錯誤:', '使用者不存在');
            return next(appError(404, '使用者不存在'));
          }

          user.photo = url;
          await userRepo.save(user);

          return { data: url };
        },
        activity: async () => {
          const activityId = uuidv4();
          const urls = await Promise.all(
            files.map(async (file, index) => {
              return uploadToS3({
                key: `activity/${index}-${activityId}`,
                body: file.buffer,
                contentType: file.mimetype,
              });
            }),
          );

          return { activityId, data: urls };
        },
      };

      const handler = uploadStrategies[uploadType];
      if (!handler) {
        logger.warn('上傳圖片錯誤:', '不支援的上傳策略');
        return next(appError(400, '不支援的上傳策略'));
      }

      const result = await handler();
      res.status(200).json({
        message: '上傳圖片成功',
        data: {
          activityId: result.activityId || null,
          photo: result.data,
        },
      });
    } catch (error) {
      if (error instanceof S3ServiceException) {
        logger.error('S3 上傳錯誤:', error.message);
        next(appError(500, 'S3 上傳錯誤', error.message));
      } else {
        logger.error('上傳圖片失敗:', error);
        next(error);
      }
    }
  },
};

module.exports = uploadController;
