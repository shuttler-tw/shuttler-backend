const express = require('express');
const memberRouter = require('./members');

const router = express.Router();

router.use('/auth', memberRouter);
router.use('/user', memberRouter);

module.exports = router;
