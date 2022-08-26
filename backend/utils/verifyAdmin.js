const jwt = require('jsonwebtoken');
const createError = require('../utils/error');
const verifyToken = require('../utils/verifytoken');

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};

module.exports = verifyAdmin;