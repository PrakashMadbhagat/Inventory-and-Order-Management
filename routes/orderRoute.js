const express = require('express');
const router = express.Router();
const { placeOrder, updateOrderStatus, getOrders, getAllOrders } = require('../controllers/orderController');
const { verifyToken, checkAdmin , checkCustomer } = require('../middleware/authMiddleware');

router.post('/', verifyToken, checkCustomer, placeOrder);
router.put('/:id/status', verifyToken, checkAdmin, updateOrderStatus);
router.get('/', verifyToken , checkCustomer, getOrders);
router.get('/admin', verifyToken, checkAdmin, getAllOrders);

module.exports = router;
