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
      const userRepo = dataSource.getRepository('User');
      const user = await userRepo.findOneBy({ id });
      if (!user) {
        logger.warn('使用者不存在:', id);
        return next(appError(404, '使用者不存在'));
      }

      const newebpayString = `MerchantID=${config.get()}&RespondType=JSON&TimeStamp=${Math.floor(Date.now() / 1000)}
      &Version=1.5&LangType=zh-tw&MerchantOrderNo=${user.id}${Date.now()}&Amt=${pointsPlan.value}&
      ItemDesc=購買點數&ReturnURL=${config.NEWEBPAY.ReturnURL}&NotifyURL=${config.NEWEBPAY.NotifyURL}&
      CustomerURL=${config.NEWEBPAY.CustomerURL}&Email=${user.email}`;

      const hashKey = config.NEWEBPAY.HashKey;
      const hashIV = config.NEWEBPAY.HashIV;
    } catch (error) {
      logger.error('購買點數資料錯誤:', error);
      next(appError(500, '購買點數資料錯誤'));
    }
  },
};

module.exports = pointsController;
