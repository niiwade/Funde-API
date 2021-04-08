const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;

//init body-parser middleware
app.use(bodyParser.json());


//Routes
app.get('/', (req, res) => {
    res.send('Hello');
});

//listen for incoming request
app.listen(PORT, () => {
    console.log(`Server is running on  port: http://localhost:${PORT}`);
});