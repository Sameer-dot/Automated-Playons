const { protect } = require('../middleware/authMiddleware');

const express = require('express');
const router = express.Router();
const { setOrder } = require('../controllers/orderController');

router.route('/').post(setOrder);

module.exports = router;
