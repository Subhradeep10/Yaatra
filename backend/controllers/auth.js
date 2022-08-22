const User = require("../models/users");

const register = async (req, res, next) => {
    const user = new User(req.body);
    try {
        const saveUser = await user.save();
        res.status(200).json(saveUser);
    } catch (error) {
        next(error);
    }
}

module.exports = register;