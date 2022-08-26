const Hotels = require("../../models/hotels");

const createHotel = async (req, res, next) => {
    const hotel = new Hotels(req.body);
    try {
        const saveHotel = await hotel.save();
        res.status(200).json(saveHotel);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = createHotel;