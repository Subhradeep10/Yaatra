const express = require('express');
const createRoom = require('../controllers/room/createRoom');
const getRoom = require('../controllers/room/getRoom');
const updateRoom = require('../controllers/room/updateRoom');
const deleteRoom = require('../controllers/room/deleteRoom');
const getAllRooms = require('../controllers/room/getAllRooms');
const updateRoomAvailability = require('../controllers/room/updateRoomAvailability');
const verifyAdmin = require('../utils/verifytoken');

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getAllRooms);

module.exports = router;