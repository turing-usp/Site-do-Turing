//express setup
const express = require('express');
const routes = express.Router();
//controller import
const membersController = require('./controllers/membersController');
const mediumController = require('./controllers/mediumController')

routes.get('/members', membersController.index);
routes.post('/members', membersController.create);
routes.get('/listMediumPosts', mediumController.index)

module.exports = routes;