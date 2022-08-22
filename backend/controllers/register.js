const User = require("../models/users");
const bcrypt = require("bcryptjs");
const createError = require("../utils/error");

const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const user = new User({
            ...req.body,
            password: hash
        });

        await user.save();
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}


module.exports = register;