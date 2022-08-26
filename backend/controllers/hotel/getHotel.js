const Hotels = require("../../models/hotels");
const getHotel = async (req, res) => {
    try {
        const Hotel = await Hotels.findById(req.params.id);
        res.status(200).json(Hotel);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = getHotel;