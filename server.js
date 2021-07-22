const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Max-Age", "1800");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

dotenv.config( { path : 'config.env'} );

// connect mongodb database
require('./database/database')();

// calling routes
app.use('/', require('./routes/router'));

app.listen(5000, () => console.log(`Server is stated on http://localhost:5000`));