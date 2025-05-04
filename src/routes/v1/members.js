const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/member');
const { authenticateLocal, authenticateJWT } = require('../../middlewares/auth');

router.post('/signup', memberController.signUp);
router.post('/login', authenticateLocal, memberController.login);
router.post('/logout', memberController.logout);
router.get('/profile', authenticateJWT, memberController.getMemberProfile);
router.put('/profile', authenticateJWT, memberController.updateMemberProfile);

module.exports = router;
