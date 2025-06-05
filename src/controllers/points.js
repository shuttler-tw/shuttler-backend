const { dataSource } = require('../db/data-source');
const logger = require('../utils/logger')('Points');
const appError = require('../utils/appError');
const config = require('../config');
const crypto = require('crypto');

const pointsController = {
  getPoints: async (req, res, next) => {
    try {
      const pointsRepo = dataSource.getRepository('PointsPlan');
      const points = await pointsRepo.find({ select: ['points', 'value'] });
      if (!points) {
        logger.warn('取得點數資料錯誤:', '點數資料不存在');
        return next(appError(400, '點數資料不存在'));
      }
      res.status(200).json({
        status: 'success',
        data: points,
      });
    } catch (error) {
      logger.error('取得點數資料錯誤:', error);
      appError(500, '取得點數資料錯誤');
      next(error);
    }
  },
  purchasePoints: async (req, res, next) => {
    try {
      const { id } = req.user;
      const { pointsPlan } = req.body;

      const membersRepo = dataSource.getRepository('Members');
      const user = await membersRepo.findOneBy({ id });

      if (!user) {
        logger.warn('使用者不存在:', id);
        return next(appError(404, '使用者不存在'));
      }

      const timeStamp = Math.floor(Date.now() / 1000);
      const newebpayString = `MerchantID=${config.get('newebpay.MerchantID')}&RespondType=${config.get('newebpay.RespondType')}&TimeStamp=${timeStamp}&Version=${config.get('newebpay.Version')}&MerchantOrderNo=${timeStamp}&Amt=${pointsPlan.value}&ItemDesc=${encodeURI('points')}&Email=${encodeURIComponent(user.email)}&CREDIT=1`;

      console.log('======================================');
      console.log('newebpayString:', newebpayString);
      console.log('======================================');

      // 使用 AES 進行加密
      const hashKey = config.get('newebpay.HashKey');
      const hashIV = config.get('newebpay.HashIV');

      const aes = crypto.createCipheriv('aes256', hashKey, hashIV);
      const aesEnc = aes.update(newebpayString, 'utf8', 'hex') + aes.final('hex');
      console.log('======================================');
      console.log('aesEnc:', aesEnc);
      console.log('======================================');

      // 使用 SHA-256 進行雜湊
      const sha = crypto.createHash('sha256');
      const plainText = `HashKey=${hashKey}&${aesEnc}&HashIV=${hashIV}`;
      const shaEnc = sha.update(plainText).digest('hex').toUpperCase();
      console.log('======================================');
      console.log('shaEnc:', shaEnc);
      console.log('======================================');

      // return to frontend
      res.status(200).json({
        status: 'success',
        data: {
          MerchantOrderNo: timeStamp,
          Amt: pointsPlan.value,
          TradeInfo: aesEnc,
          TradeSha: shaEnc,
          itemDesc: encodeURI('points'),
          timeStamp,
        },
      });
    } catch (error) {
      logger.error('購買點數資料錯誤:', error);
      next(appError(500, '購買點數資料錯誤'));
      // console.error('購買點數資料錯誤:', error);
    }
  },
  newebpayReturn: async (req, res, next) => {
    try {
      // const { MerchantID, MerchantOrderNo, Amt } = req.query;
      console.log('======================================');
      console.log('newebpayReturn query:', req.data);
      console.log('======================================');
      // TODO: 驗證新支付返回的資料
      // 存入資料庫

      // const pointsOrderRepo = dataSource.getRepository('PointsOrder');
    } catch (error) {
      logger.error('新支付返回錯誤:', error);
      next(appError(500, '新支付返回錯誤'));
    }
  },
};

module.exports = pointsController;
