const express = require('express');
const { userId , userUpdate } = require('../controllers/user.js');

const router = express.Router();

// Define your user-related routes here
// Example: router.get('/:userId', getUserProfile);
router.post('/userId', userId)
router.post('/userUpdate', userUpdate)
module.exports = router;
