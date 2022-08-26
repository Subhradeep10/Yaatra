const jwt = require('jsonwebtoken');
const createError = require('../utils/error');
const verifyToken = require('../utils/verifytoken');

const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });

}

module.exports = verifyUser;