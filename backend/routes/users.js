const express = require('express');
const updateUser = require('../controllers/users');
const deleteUser = require('../controllers/users');
const getUser = require('../controllers/users');
const getAllUsers = require('../controllers/users');
const verifyAdmin = require('../utils/verifytoken');
const verifyToken = require('../utils/verifytoken');
const verifyUser = require('../utils/verifytoken');

const router = express.Router();


// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//     res.json({ message: 'You are authenticated' });
// })

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.json({ message: 'Hello Admin, You are logged in' });
// })

//UPDATE
router.put('/:id', updateUser);
//DELETE
router.delete('/:id', deleteUser);
//GET
router.get('/:id', getUser);
//GET ALL
router.get('/', getAllUsers);
module.exports = router;