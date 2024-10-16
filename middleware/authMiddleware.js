const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.token; 
    if (!token) {
        return res.status(401).json({ message: 'Access denied. Please log in first.' });
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;  
        next(); 
    } catch (err) {
        return res.status(500).json({ message: 'Invalid token. Authentication failed.' });
    }
};

exports.checkAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(500).json({ message: 'Access denied' });
    }
    next();
};

exports.checkCustomer = (req, res, next) => {
    if (req.user.role !== 'customer') {
        return res.status(500).json({ message: 'Access denied' });
    }
    next();
};