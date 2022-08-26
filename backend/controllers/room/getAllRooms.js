const Room = require('../../models/rooms');
const Hotel = require('../../models/hotels');

const getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
};

module.exports = getAllRooms;