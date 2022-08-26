const Hotels = require("../../models/hotels");

const getAllHotels = async (req, res, next) => {

    const { min, max, ...others } = req.query;
    try {
        const hotels = await Hotels.find({
            ...others,
            cheapestPrice: { $gt: min | 1, $lt: max || 10000 },
        }).limit(req.query.limit);
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
};

module.exports = getAllHotels;