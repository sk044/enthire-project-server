const express = require('express')
const app = express();
const path = require('path');

app.use(express.json());

// serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

// connect mongodb database
require('./database/database')();

// calling routes
app.use('/', require('./routes/router'));

app.listen(5000, () => console.log(`Server is stated on http://localhost:5000`));