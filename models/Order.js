const mongoose = require('mongoose');

const ordertSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'User' 
    },
    products : [{
        product : {
            type : mongoose.Schema.Types.ObjectId ,
            ref : 'Product'        
        },
        quantity : Number
    }],
    status : {
        type : String , 
        enum : ['Pending' , 'Shipped' , 'Delivered'] , 
        default : 'Pending'
    }
});

module.exports = mongoose.model('Order', ordertSchema);
