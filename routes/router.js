const route = require('express').Router()
const controller = require('../controller/controller');
const store = require('../middleware/multer')

// routes
route.get('/saved', controller.home);
route.post('/upload', store.array('images', 12) , controller.uploads)

module.exports = route;
