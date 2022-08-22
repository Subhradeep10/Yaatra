const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createError = require("../utils/error");

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return next(createError(404, "User not found!"));
        } else {
            const isPasswordMatch = bcrypt.compareSync(req.body.password, user.password);
            if (!isPasswordMatch) {
                return next(createError(400, "Wrong password or username!"));
            }
            const token = jwt.sign(
                { id: user._id, isAdmin: user.isAdmin },
                process.env.JWT_SECRET
            );

            const { password, isAdmin, ...otherDetails } = user._doc;
            res
                .cookie("access_token", token, {
                    httpOnly: true,
                })
                .status(200)
                .json({ details: { ...otherDetails }, isAdmin });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = login;