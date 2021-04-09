const express = require('express');

const router = express.Router();


// routes lead to users     
router.get('/', (req, res) => {
    res.send('client routes fired');
});

module.exports = router;