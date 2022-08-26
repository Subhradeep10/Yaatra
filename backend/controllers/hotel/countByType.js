const Hotels = require("../../models/hotels");

const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotels.countDocuments({ type: "Hotel" });
        const apartmentCount = await Hotels.countDocuments({ type: "Apartment" });
        const resortCount = await Hotels.countDocuments({ type: "Resort" });
        const villaCount = await Hotels.countDocuments({ type: "Villa" });
        const cabinCount = await Hotels.countDocuments({ type: "Cabin" });

        res.status(200).json([
            { type: "Hotel", count: hotelCount },
            { type: "Apartment", count: apartmentCount },
            { type: "Resort", count: resortCount },
            { type: "Villa", count: villaCount },
            { type: "Cabin", count: cabinCount },
        ]);
    } catch (err) {
        next(err);
    }
};

module.exports = countByType;