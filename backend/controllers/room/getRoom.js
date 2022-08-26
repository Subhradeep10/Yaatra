const Room = require('../../models/rooms');
const Hotel = require('../../models/hotels');

const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
};

module.exports = getRoom;