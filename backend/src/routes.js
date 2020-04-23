//express setup
const express = require('express');
const routes = express.Router();
//controller import
const membersController = require('./controllers/membersController');
const mediumController = require('./controllers/mediumController');
const faqController = require('./controllers/faqController');
const eventsController = require('./controllers/eventsController');
const projectsController = require('./controllers/projectsController');

routes.get('/members', membersController.index);
routes.post('/members', membersController.create);
routes.get('/listMediumPosts', mediumController.index);
routes.post('/faq', faqController.create);
routes.get('/faq', faqController.index);
routes.post('/events', eventsController.create);
routes.get('/events', eventsController.index);
routes.post('/projects', projectsController.create);
routes.get('/projects', projectsController.index);
module.exports = routes;