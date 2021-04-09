const express = require('express');
const User = require('../models/User');

const router = express.Router();


// REGISTER     
router.get('/register', async(req, res) => {
    const user = await new User({
        firstName: "Jose",
        lastName: "Lmaptey",
        username: "wadey",
        email: "Joe@gmail.com",
        password: "12344"
    });

    await user.save();
    res.send('Ok');
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