const Hotels = require("../../models/hotels");

const getAllHotels = async (req, res, next) => {

    try {
        const AllHotel = await Hotels.find();
        res.status(200).json(AllHotel);
    } catch (error) {
        next(error);
    }
};

module.exports = getAllHotels;