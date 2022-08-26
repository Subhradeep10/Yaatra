const Hotels = require("../../models/hotels");

const updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await Hotels.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json({ updateHotel });
    } catch (error) {
        next(error);
    }
};

module.exports = updateHotel;