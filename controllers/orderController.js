const Order = require('../models/Order');

const placeOrder = async (req, res) => {
    try {
        const order = await Order.create({ user: req.user.id, products: req.body.products });
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};
const updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order status updated successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Error updating order status', error: error.message });
    }
};
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('products.product');
        res.status(200).json({ message: 'Retrieved orders successfully', orders });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving orders', error: error.message });
    }
};
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user').populate('products.product');
        res.status(200).json({ message: 'Retrieved all orders successfully', orders });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving orders', error: error.message });
    }
};

module.exports = { placeOrder, updateOrderStatus, getOrders, getAllOrders };
