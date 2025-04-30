const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/member');
// const isAuth = require('../../middlewares/isAuth');

router.post('/signup', memberController.signUp);
router.post('/login', memberController.login);
router.post('/logout', memberController.logout);
// router.get('/profile', isAuth, memberController.getMemberProfile);

module.exports = router;
