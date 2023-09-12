const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose'); // Adding Mongoose for MongoDB
const jwt = require('jsonwebtoken');

require('dotenv').config();

const mongo_uri = process.env.MONGO_URI;

// Mongoose setup
mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(() => {
    console.log("Connected to MongoDB Atlas");
}).catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
});

const User = mongoose.model('User', {
    fullName: String,
    username: String,
    hashedPassword: String,
    phoneNumber: String,
});



const signup = async (req, res) => {
    try {
        const { fullName, username, password, phoneNumber } = req.body;

        const userId = crypto.randomBytes(16).toString('hex');

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            fullName,
            username,
            hashedPassword,
            phoneNumber,
        });

        await user.save();

        res.status(200).json({ fullName, username, userId, phoneNumber, hashedPassword });
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) return res.status(400).json({ message: 'User not found' });

        const success = await bcrypt.compare(password, user.hashedPassword);

        if (success) {
            res.status(200).json({ fullName: user.fullName, username, userId: user._id.toString() });
        } else {
            res.status(401).json({ message: 'Incorrect password' });
        }
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error });
    }
};

module.exports = { signup, login };
