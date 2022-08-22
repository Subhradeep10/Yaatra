const hotels = require("../models/hotels");

const createHotel = async (req, res, next) => {
    const hotel = new hotels(req.body);
    try {
        const saveHotel = await hotel.save();
        res.status(200).json(saveHotel);
    } catch (error) {
        next(error);
    }
}

const updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await hotels.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateHotel);
    } catch (error) {
        next(error);
    }
}

const deleteHotel = async (req, res, next) => {
    try {
        await hotels.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Hotel deleted' });
    } catch (error) {
        next(error);
    }
}

const getHotel = async (req, res) => {
    try {
        const Hotel = await hotels.findById(req.params.id);
        res.status(200).json(Hotel);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllHotels = async (req, res, next) => {
    const failed = true

    try {
        const Hotels = await hotels.find();
        res.status(200).json(Hotels);
    } catch (error) {
        next(error);
    }
}


module.exports = createHotel;
module.exports = updateHotel;
module.exports = deleteHotel;
module.exports = getHotel;
module.exports = getAllHotels;