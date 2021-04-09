const express = require('express');
const User = require('../models/User');

const router = express.Router();


// REGISTER     
router.post('/register', async(req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });


    try {
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;





//const express = require('express');
//const user = require('../models/User');

//const router = express.Router();


// REGISTER    
//router.get('/register', async(req, res) => {
//const user = await new User({
//firstname: "Joseoh",
//lastname: "Lamps",
//username: "Nii",
//email: "Joe@gmail.com",
//password: "023i40i0",
//});

//await user.save();
//res.send("OK");
//});

//module.exports = router;