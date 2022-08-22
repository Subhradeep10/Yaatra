const User = require("../models/users");
const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const user = new User({
        ...req.body,
        password: hash
    });
    try {
        const saveUser = await user.save();
        res.status(200).json(saveUser);
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(401).json({ message: "User not found" });
        } else {
            const isPasswordMatch = bcrypt.compareSync(req.body.password, user.password);
            if (!isPasswordMatch) {
                res.status(401).json({ message: "Email or Password is incorrect" });
            } else {
                res.status(200).json(user);
            }
        }
    } catch (error) {
        next(error);
    }
}

module.exports = register;
module.exports = login;