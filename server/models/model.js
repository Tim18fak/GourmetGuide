const mongoose = require('mongoose');

const User = mongoose.model('Profile', {
    age: Number,
    allergies: Object/*  {
        peanuts: Boolean,
        treeNuts: Boolean,
        milk: Boolean,
        egg: Boolean,
        wheat: Boolean,
        soy: Boolean,
        mustard: Boolean,
        sesame: Boolean,
        fishAndShellfish: Boolean,
    } */,
    region: String,
    ID: String,
    gender: String
});

module.exports = User;
