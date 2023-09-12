const mongoose = require('mongoose'); 
const crypto = require('crypto')
const User = require('../models/model')
const mongodb = require('mongodb')

const userId = async (req, res) => {
  try {
    const { age , gender,  region , allergies, ID/* : { peanuts , milk , mustard , treeNuts, fishAndShellfish, wheat, soy, sesame} */ }  = req.body;
    const userTk = crypto.randomBytes(8).toString('hex');
    const profile = new User({
  age,
  allergies /* {
      peanuts,
      treeNuts,
      milk,
      egg,
      wheat,
      soy,
      mustard,
      sesame,
      fishAndShellfish,
  } */,
  gender,
  region,
  ID
    })
    
    await profile.save()
    res.status(200).json({userTk})


  } catch (error) {
    res.status(500).json({message : error })
  }
}

const userUpdate = async (req, res) => {
  try {
    const { age, gender, region, allergies, ID } = req.body;
    console.log("Request body:", req.body);

    const user = await User.findOne({ ID: ID });
    console.log("User found:", user);
    const updateTK = crypto.randomBytes(10).toString('hex')
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updateValues = {
      age: age,
      allergies: allergies,
      gender: gender,
      region: region,
    };
    console.log("Update values:", updateValues);

    await User.findByIdAndUpdate(user._id, { $set: updateValues });
    console.log("Update successful");

    res.status(200).json();
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { userId , userUpdate};