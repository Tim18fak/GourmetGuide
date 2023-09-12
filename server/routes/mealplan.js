const express = require('express');
const { mealplan, getMeal,deleteMealList} = require('../controllers/mealplan.js');

const router = express.Router();

router.post('/mealplan', mealplan)
router.get('/getmeal',getMeal)
router.delete('/deleteMeal/:id',deleteMealList)
module.exports = router; // Corrected the export statement
