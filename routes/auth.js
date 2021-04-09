const express = require('express');

const router = express.Router();


// routes lead to users     
router.get('/', (req, res) => {
    res.send('auth routes fired');
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