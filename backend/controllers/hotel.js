const Hotels = require("../models/hotels");

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

const updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await Hotels.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json({ updateHotel });
    } catch (error) {
        next(error);
    }
};

const deleteHotel = async (req, res, next) => {
    try {
        await Hotels.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Hotel deleted' });
    } catch (error) {
        next(error);
    }
};

const getHotel = async (req, res) => {
    try {
        const Hotel = await Hotels.findById(req.params.id);
        res.status(200).json(Hotel);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getAllHotels = async (req, res, next) => {

    try {
        const AllHotel = await Hotels.find();
        res.status(200).json(AllHotel);
    } catch (error) {
        next(error);
    }
};


module.exports = createHotel;
module.exports = updateHotel;
module.exports = deleteHotel;
module.exports = getHotel;
module.exports = getAllHotels;