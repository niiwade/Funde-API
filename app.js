const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const usersRoutes = require('./routes/users');
const smeRoutes = require('./routes/smes')


const app = express();
const PORT = 3000;



dotenv.config();

//init body-parser middleware
app.use(bodyParser.json());

//morgan middleware
app.use(morgan("tiny"));


//Routes
app.use('/users', usersRoutes);
app.use('/smes', smeRoutes);
app.get('/', (req, res) => {
    res.send('Hello');
});

//listen for incoming request
app.listen(PORT, () => {
    console.log(`Server is running on  port: http://localhost:${PORT}`);
});