const Product = require('../models/Product');

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ message: 'Create product successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error: error.message });

    }
}
const getProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(201).json({ message: 'Get product successfully', products });
    } catch (error) {
        res.status(500).json({ message: 'Error getting product', error: error.message });

    }
}
const updateProduct = async (req, res) => {
    try {
        const id  = req.params.id ;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json({ message: 'Update product successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error: error.message });
        
    }
}
const deleteProduct = async (req, res) => {
    try {
        const id  = req.params.id ;
        const product = await Product.findByIdAndDelete(id);
        res.status(201).json({ message: 'Delete product successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });

    }
}
const checkLowStockProducts = async (req, res) => {
     const lowStockProducts = await Product.find({
        $expr: { $lt: ["$stock", "$lowStockThreshold"] }
    });
    res.json(lowStockProducts);
};
module.exports = { createProduct , getProduct , updateProduct , deleteProduct , checkLowStockProducts}