//express setup
const express = require('express');
const routes = express.Router();
//controller import
const membersController = require('./controllers/membersController');

routes.get('/members', membersController.index);
routes.post('/members', membersController.create);

module.exports = routes;