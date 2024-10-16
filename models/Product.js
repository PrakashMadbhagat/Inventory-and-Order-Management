const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    lowStockThreshold: {
        type: Number,
        default: 5
    }
});

module.exports = mongoose.model('Product', productSchema);
