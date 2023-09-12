const mongoose = require('mongoose')


const groceryListSchema = new mongoose.Schema({
  Item: String,
  Description: String,
  Quantity: Number,
  Rate: Number,
  Amount: Number,
  Remarks: String
}, {
  timestamps: true
});
//////////// generateModelName function
const generateModelName = (username) => {
  return `${username}_groceryrecord`;
}
const  updategrocery = (username) => {
  return mongoose.model(username,groceryListSchema)
}
const  deletegrocery = (username) => {
  return mongoose.model(username,groceryListSchema)
}
const  getgrocery = (username) => {
  return mongoose.model(username,groceryListSchema)
}
//////////////// creategroceryListModel function
const creategroceryListModel = (username) => {
  const modelName = generateModelName(username);
  return mongoose.model(modelName, groceryListSchema);
} 
const AddgroceryList = async(req,res) => {
  try {
    const username = req.query.username
    ////////////////  files from the front side
    const {
        Item,
        Description,
        Quantity,
        Rate,
        Amount,
        Remarks } = req.body;
        console.log(req.body)
        /////////////////// creating a new Model using a custom suffix anad username
       const MealRecord = creategroceryListModel(username);
       const meal = new MealRecord({
        Item,
        Description,
        Quantity,
        Rate,
        Amount,
        Remarks
    });
    await meal.save();
    res.json("groceryItem Added");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred', errorMessage: error.message });
  }
}

const groceryListUpdate = async (req,res) => {
  try {
    const username = req.query.username;

    // Create the Mongoose model using the username
    const UpdategroceryRecord = updategrocery(`${username}_mealrecord`);
    
    const updatedData = {
      Item: req.body.Item,
      Description: req.body.Description,
      Quantity: req.body.Quantity,
      Rate: req.body.Rate,
      Amount: req.body.Amount,
      Remarks: req.body.Remarks
    };

    const updatedItem = await groceryRecord.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true } // Return the updated document
    );

    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred', errorMessage: error.message });
  }
}

const deletegroceryList = async (req, res) => {
  try {
    const username = req.query.username;

    // Create the Mongoose model using the username
    const DeletegroceryRecord = deletegrocery(`${username}_groceryrecord`);

    const deletedItem = await DeletegroceryRecord.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred', errorMessage: error.message });
  }
};


const getgroceryList = async (req, res) => {
  try {
    const username = req.query.username;

    // Create the Mongoose model using the username
    const GroceryRecord = getgrocery(`${username}_groceryrecord`)

    const meals = await GroceryRecord.find();
    res.json(meals);
    console.log(meals)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred', errorMessage: error.message });
  }
};

module.exports = { AddgroceryList, getgroceryList, deletegroceryList, groceryListUpdate };
