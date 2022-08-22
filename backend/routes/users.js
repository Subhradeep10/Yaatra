const express = require('express');
const router = express.Router();
const updateUser = require('../controllers/users');
const deleteUser = require('../controllers/users');
const getUser = require('../controllers/users');
const getAllUsers = require('../controllers/users');


//UPDATE
router.put('/:id', updateUser);
//DELETE
router.delete('/:id', deleteUser);
//GET
router.get('/:id', getUser);
//GET ALL
router.get('/', getAllUsers);
module.exports = router;