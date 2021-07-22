const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// connect mongodb database
const app = express();
app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

dotenv.config( { path : 'config.env'} );
const PORT = process.env.PORT || 8080;
require('./database/database')();

// calling routes
app.use('/', require('./routes/router'));

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});