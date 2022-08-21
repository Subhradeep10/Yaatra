const express = require('express');
const hotels = require('../models/hotels');
const router = express.Router();

//CREATE
router.post('/', async (req, res) => {
    const hotel = new hotels(req.body);
    try {
        const saveHotel = await hotel.save();
        res.status(200).json(saveHotel);
    } catch (error) {
        res.status(500).json(error);
    }
});
//UPDATE
//DELETE
//GET
//GET ALL

module.exports = router;