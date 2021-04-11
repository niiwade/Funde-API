const express = require('express');
const User = require('../models/User');
const bcrypt = require("bcrypt");

const router = express.Router();


// REGISTER     
router.post('/register', async(req, res) => {

    try {

        //generated new and hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);


        //create new user
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });


        // save user and return response
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
});


//LOGIN
router.post('/login', async(req, res) => {


    try {

        //find user
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("User not found");

        //check for valid password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Wrong password");


        //if user passes validation
        res.status(200).json(user);


    } catch (err) {
        res.status(500).json(err);
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