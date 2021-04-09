const express = require('express');
const user = require('../models/user');

const router = express.Router();


// REGISTER    
router.get('/register', async(req, res) => {
    const User = await new user({
        firstname: "Joseoh",
        lastname: "Lamps",
        username: "Nii",
        email: "Joe@gmail.com",
        password: "023i40i0",
    });

    await user.save();
    res.send("OK");
});

module.exports = router;