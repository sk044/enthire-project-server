const express = require('express');
const route = express.Router()

const controller = require('../controller/controller');
const store = require('../middleware/multer')

// API

route.get('/saved', controller.home);
route.post('/upload', store.array('images', 12) , controller.uploads);

module.exports = route