const express = require('express');
const updateHotel = require('../controllers/hotel/updateHotel');
const createHotel = require('../controllers/hotel/createHotel');
const hotels = require('../models/hotels');
const createError = require('../utils/error');
const deleteHotel = require('../controllers/hotel/deleteHotel');
const getHotel = require('../controllers/hotel/getHotel');
const getAllHotels = require('../controllers/hotel/getAllHotels');
const verifyAdmin = require('../utils/verifytoken');
const countByCity = require('../controllers/hotel/countByCity');
const countByType = require('../controllers/hotel/countByType');
const getHotelRooms = require('../controllers/hotel/getHotelRoom');
const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createHotel);
//UPDATE
router.put('/:id', verifyAdmin, updateHotel);
//DELETE
router.delete('/:id', verifyAdmin, deleteHotel);
//GET
router.get('/find/:id', getHotel);
//GET ALL
router.get('/', getAllHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
router.get('/room/:id', getHotelRooms);
module.exports = router;