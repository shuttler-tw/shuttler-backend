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
          '密碼不符合規則,需要包含英文數字大小寫,最短8個字,最長16個字',
        );
        return next(appError(400, '密碼格式錯誤'));
      }

      const existingMember = await dataSource.getRepository('Member').findOne({
        where: {
          email,
        },
      });
      if (existingMember) {
        logger.warn('註冊使用者錯誤:', '該信箱已被註冊');
        return next(appError(409, '該信箱已被註冊'));
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

      res.status(201).json({
        data: {
          member: {
            id: savedMember.id,
            name: savedMember.name,
          },
        },
      });
    } catch (error) {
      logger.error('註冊使用者錯誤:', error);
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!isValidString(email) || !isValidString(password)) {
        logger.warn('登入使用者錯誤:', '欄位未填寫正確');
        return next(appError(400, '欄位未填寫正確'));
      }

      const existingMember = await dataSource.getRepository('Member').findOne({
        where: {
          email,
        },
        select: ['id', 'name', 'email', 'password'],
      });
      if (!existingMember) {
        logger.warn('登入使用者錯誤:', '使用者不存在');
        return next(appError(400, '使用者不存在'));
      }

      const isMatch = await bcrypt.compare(password, existingMember.password);
      if (!isMatch) {
        logger.warn('登入使用者錯誤:', '密碼錯誤');
        return next(appError(400, '密碼錯誤'));
      }

      const token = await generateJWT({ id: existingMember.id });

      res.status(200).json({
        data: {
          member: {
            token,
            user: {
              name: existingMember.name,
              email: existingMember.email,
            },
          },
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
