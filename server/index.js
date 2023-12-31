const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js'); // Import the new user routes
const mealPlan = require('./routes/mealplan.js')
const grocerylist = require('./routes/grocerylist.js')
const Email = require('./routes/Email.js')
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/m', (req, res)  => {
    res.send('hello world');
});

app.use('/auth', authRoutes);
app.use('/user', userRoutes);  // Use the new user routes
app.use('/mealplan',mealPlan)
app.use('/groceryList',grocerylist)
app.use('/Email', Email)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on IP 0.0.0.0 and port ${PORT}`);
});
