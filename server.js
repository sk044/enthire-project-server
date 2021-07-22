const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyparser = require("body-parser");

// connect mongodb database
const app = express();
app.use(cors());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
      res.header('Access-Control-Allow-Credentials', 'true');
      // intercept OPTIONS method
      if ('OPTIONS' == req.method) {
          res.status(200).send();
      } else {
          next();
      }
});

app.use(express.json());

dotenv.config( { path : 'config.env'} );
const PORT = process.env.PORT || 8080;
require('./database/database')();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}));

// calling routes
app.use('/', require('./routes/router'));

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});