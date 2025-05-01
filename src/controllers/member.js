const bcrypt = require('bcrypt');
const { dataSource } = require('../db/data-source');
const logger = require('../utils/logger')('Member');
const { isValidString, isValidPassword } = require('../utils/validUtils');
const appError = require('../utils/appError');
const { generateJWT } = require('../utils/jwtUtils');

const memberController = {
  signUp: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      if (!isValidString(name) || !isValidString(email) || !isValidString(password)) {
        logger.warn('註冊使用者錯誤:', '欄位未填寫正確');
        return next(appError(400, '欄位未填寫正確'));
      }

      if (!isValidPassword(password)) {
        logger.warn(
          '註冊使用者錯誤:',
          '密碼不符合規則，需要包含英文數字大小寫，最短8個字，最長16個字',
        );
        return next(appError(400, '密碼不符合規則，需要包含英文數字大小寫，最短8個字，最長16個字'));
      }

      const existingMember = await dataSource.getRepository('Member').findOne({
        where: {
          email,
        },
      });
      if (existingMember) {
        logger.warn('註冊使用者錯誤:', '此 Email 已經註冊');
        return next(appError(409, '此 Email 已經註冊'));
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newMember = await dataSource.getRepository('Member').create({
        name,
        email,
        password: hashedPassword,
      });

      const savedMember = await dataSource.getRepository('Member').save(newMember);
      logger.info('註冊使用者成功:', savedMember.id);

      const token = await generateJWT({ id: savedMember.id });

      res.status(201).json({
        message: '註冊成功',
        data: {
          user: {
            id: savedMember.id,
            name: savedMember.name,
          },
          token,
        },
      });
    } catch (error) {
      logger.error('註冊使用者錯誤:', error);
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const user = req.user;
      const token = await generateJWT({ id: user.id });

      res.status(200).json({
        message: '登入成功',
        data: {
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
          token,
        },
      });
    } catch (error) {
      logger.error('登入使用者錯誤:', error);
      next(error);
    }
  },
  logout: async (req, res, next) => {
    try {
      // TODO: delete session or token

      logger.info('登出使用者成功');
      res.status(200).json({
        message: '登出成功',
      });
    } catch (error) {
      logger.error('登出使用者錯誤:', error);
      next(error);
    }
  },
  // async getMemberProfile(req, res, next) {
  //   try {
  //     const { id } = req.user;
  //     if (!isValidString(id)) {
  //       return next(appError(400, '欄位未填寫正確'));
  //     }
  //     const findUser = await dataSource.getRepository('Member').findOne({
  //       where: {
  //         id,
  //       },
  //     });

  //     res.status(200).json({
  //       status: 'success',
  //       data: {
  //         //
  //       },
  //     });
  //   } catch (error) {
  //     logger.error('取得使用者資料錯誤:', error);
  //     next(error);
  //   }
  // },
};

module.exports = memberController;
