const express = require('express');
const memberRouter = require('./members');
// const orderRouter = require('./orders');

const router = express.Router();

router.use('/auth', memberRouter);
// router.use('/orders', orderRouter);

module.exports = router;
