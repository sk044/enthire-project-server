const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

app.use(express.json());

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// app.use(function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", '*');
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     res.setHeader("Access-Control-Max-Age", "1800");
//     res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.setHeader("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//     next();
// });

dotenv.config( { path : 'config.env'} );

// connect mongodb database
require('./database/database')();

// calling routes
app.use('/', require('./routes/router'));

app.listen(5000, () => console.log(`Server is stated on http://localhost:5000`));