const express = require('express');
const router = express();
const {createProduct , getProduct , updateProduct , deleteProduct , checkLowStockProducts} = require('../controllers/productController');
const { verifyToken , checkAdmin} = require('../middleware/authMiddleware');

router.post('/', verifyToken , checkAdmin , createProduct);
router.get('/', getProduct);
router.put('/:id', verifyToken , checkAdmin , updateProduct);
router.delete('/:id', verifyToken , checkAdmin , deleteProduct);
router.get('/low-stock', verifyToken , checkAdmin , checkLowStockProducts);

module.exports = router