const express = require('express')
const { SendEmail } = require('../controllers/sendEmail')

const router = express.Router()
router.post('/Email', SendEmail)

module.exports = router