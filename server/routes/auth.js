const express = require('express');
const { signup, login } = require('../controllers/auth.js');

const router = express.Router();

router.post('/signup', signup); // Corrected the path here
router.post('/login', login); // Corrected the path here
module.exports = router; // Corrected the export statement
