const Hotels = require("../../models/hotels");

const deleteHotel = async (req, res, next) => {
    try {
        await Hotels.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Hotel deleted' });
    } catch (error) {
        next(error);
    }
};

module.exports = deleteHotel;