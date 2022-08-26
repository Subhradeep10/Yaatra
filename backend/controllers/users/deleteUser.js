const User = require("../../models/users");

const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User has been deleted' });
    } catch (error) {
        next(error);
    }
}

module.exports = deleteUser;