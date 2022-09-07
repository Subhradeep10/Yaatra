const Hotels = require("../../models/hotels");
const Rooms = require("../../models/rooms");
const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotels.findById(req.params.id);
        const list = await Promise.all(
            hotel.rooms.map((room) => {
                return Rooms.findById(room);
            })
        );
        res.status(200).json(list)
    } catch (err) {
        next(err);
    }
};

module.exports = getHotelRooms;