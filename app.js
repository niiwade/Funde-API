const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const smeRoutes = require('./routes/smes');
const investorRoutes = require('./routes/investor');
const clientRoutes = require('./routes/client');
const documentRoutes = require('./routes/document');
const fundingapplicationRoutes = require('./routes/funding_application');
const fundingcriteriaRoutes = require('./routes/funding_criteria');
const fundingdetailRoutes = require('./routes/funding_detail');
const fundingdisbursementRoutes = require('./routes/funding_disbursement');
const fundingprojectRoutes = require('./routes/funding_project');



const app = express();
const PORT = 3000;

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, () => {
    console.log('Connected to MongoDB');
});

//init body-parser middleware
app.use(bodyParser.json());

//morgan middleware
app.use(morgan("tiny"));


//Routes
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/client', clientRoutes);
app.use('/api/document', documentRoutes);
app.use('/api/funding_application', fundingapplicationRoutes);
app.use('/api/funding_criteria', fundingcriteriaRoutes);
app.use('/api/funding_details', fundingdetailRoutes);
app.use('/api/funding_disbursement', fundingdisbursementRoutes);
app.use('/api/funding_project', fundingprojectRoutes);
app.use('/api/investor', investorRoutes);
app.use('/api/smes', smeRoutes);
app.get('/', (req, res) => {
    res.send('Hello');
});

//listen for incoming request
app.listen(PORT, () => {
    console.log(`Server is running on  port: http://localhost:${PORT}`);
});