const express = require('express');

const router = express.Router();


// routes lead to users     
router.get('/', (req, res) => {
    res.send('User routes fired');
});


//update user


//delete user

//get user


//follow user

//unfollow user

//

module.exports = router;