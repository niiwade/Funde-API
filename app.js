const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const usersRoutes = require('./routes/users');
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

//init body-parser middleware
app.use(bodyParser.json());

//morgan middleware
app.use(morgan("tiny"));


//Routes
app.use('/users', usersRoutes);
app.use('/client', clientRoutes);
app.use('/document', documentRoutes);
app.use('/funding_application', fundingapplicationRoutes);
app.use('/funding_criteria', fundingcriteriaRoutes);
app.use('/funding_details', fundingdetailRoutes);
app.use('/funding_disbursement', fundingdisbursementRoutes);
app.use('/funding_project', fundingprojectRoutes);
app.use('/investor', investorRoutes);
app.use('/smes', smeRoutes);
app.get('/', (req, res) => {
    res.send('Hello');
});

//listen for incoming request
app.listen(PORT, () => {
    console.log(`Server is running on  port: http://localhost:${PORT}`);
});