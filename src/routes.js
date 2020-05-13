//express setup
const express = require('express');
const routes = express.Router();
//controller import
const membersController = require('./controllers/membersController');
const mediumController = require('./controllers/mediumController');
const faqController = require('./controllers/faqController');
const eventsController = require('./controllers/eventsController');
const projectsController = require('./controllers/projectsController');
const formsController = require('./controllers/formsController.js')

// GET methods
routes.get('/members', membersController.index);
routes.get('/sendContact', formsController.index);
routes.get('/listMediumPosts', mediumController.index);
routes.get('/faq', faqController.index);
routes.get('/events', eventsController.index);
routes.get('/projects', projectsController.index);

// POST methods
routes.post('/members', membersController.create);
routes.post('/sendContact', formsController.create);
routes.post('/faq', faqController.create);
routes.post('/events', eventsController.create);
routes.post('/projects', projectsController.create);

// PUT methods
routes.put('/members', membersController.update);
routes.put('/sendContact', formsController.update);
routes.put('/faq', faqController.update);
routes.put('/events', eventsController.update);
routes.put('/projects', projectsController.update);

// DELETE methods
routes.delete('/members', membersController.del);
routes.delete('/sendContact', formsController.del);
routes.delete('/faq', faqController.del);
routes.delete('/events', eventsController.del);
routes.delete('/projects', projectsController.del);



module.exports = routes;
