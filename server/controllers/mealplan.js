const mongoose = require('mongoose');

const UserMealSchema = new mongoose.Schema({
  mealID: Number,
  mealTitle: String, 
  Preparation_Time: Number,
  Healthscore: Number,
  Serving: Number,
  MealImageUrl: String,
  sourceUrl: String,
}, {
  timestamps: true
});

const findMeal = (username) => {
  return mongoose.model(username,UserMealSchema)
}
const Getmeal = (username) => {
  return mongoose.model(username,UserMealSchema)
}
const generateModelName = (username) => {
  return `${username}_mealrecord`; // Customize the format as needed
};


const createMealModel = (username) => {
  const modelName = generateModelName(username);
  return mongoose.model(modelName, UserMealSchema);
};

const mealplan = async (req, res) => {
  try {
    const username = req.query.username;
    const { mealID, mealTitle, Preparation_Time, Healthscore, Serving, MealImageUrl,sourceUrl } = req.body;

    const MealRecord = createMealModel(username);
    const meal = new MealRecord({
      mealID,
      mealTitle,
      Preparation_Time,
      Healthscore,
      Serving,
      MealImageUrl,
      sourceUrl
    });

    await meal.save();
    res.json('meal has been saved');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred', errorMessage: error.message });
  }
};

const getMeal = async (req, res) => {
  try {
    const username = req.query.username;

    // Create the Mongoose model using the username
    const MealRecord = Getmeal(`${username}_mealrecord`)

    const meals = await MealRecord.find();
    res.json(meals);
    console.log(meals)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred', errorMessage: error.message });
  }
};

const deleteMealList = async (req, res) => {
  try {
    const username = req.query.username;

    // Create the Mongoose model using the username
    const groceryRecord = findMeal(`${username}_mealrecord`);

    const deletedItem = await groceryRecord.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred', errorMessage: error.message });
  }
};


module.exports = { mealplan, getMeal, deleteMealList };
