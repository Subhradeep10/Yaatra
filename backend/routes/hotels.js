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
router.put('/:id', async (req, res) => {
    try {
        const updateHotel = await hotels.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateHotel);
    } catch (error) {
        res.status(500).json(error);
    }
});
//DELETE
router.delete('/:id', async (req, res) => {
    try {
        await hotels.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Hotel deleted' });
    } catch (error) {
        res.status(500).json(error);
    }
});
//GET
router.get('/:id', async (req, res) => {
    try {
        const Hotel = await hotels.findById(req.params.id);
        res.status(200).json(Hotel);
    } catch (error) {
        res.status(500).json(error);
    }
});
//GET ALL
router.get('/', async (req, res) => {

    try {
        const Hotels = await hotels.find();
        res.status(200).json(Hotels);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;