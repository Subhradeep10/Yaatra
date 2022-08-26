const User = require("../../models/users");

const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
}

module.exports = updateUser;