const express = require('express');
const { AddgroceryList, getgroceryList, deletegroceryList,groceryListUpdate} = require('../controllers/grocerylist.js');

const router = express.Router();

router.post('/addgroceryList', AddgroceryList)
router.get('/getgroceryList',getgroceryList)
router.delete('/deletegrocery/:id', deletegroceryList)
router.post('/groceryList/update/:id',groceryListUpdate)
module.exports = router; // Corrected the export statement
