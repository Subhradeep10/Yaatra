const express = require('express');
const updateHotel = require('../controllers/hotel');
const createHotel = require('../controllers/hotel');
const hotels = require('../models/hotels');
const createError = require('../utils/error');
const deleteHotel = require('../controllers/hotel');
const getHotel = require('../controllers/hotel');
const getAllHotels = require('../controllers/hotel');
const router = express.Router();

//CREATE
router.post('/', createHotel);
//UPDATE
router.put('/:id', updateHotel);
//DELETE
router.delete('/:id', deleteHotel);
//GET
router.get('/:id', getHotel);
//GET ALL
router.get('/', getAllHotels);

module.exports = router;