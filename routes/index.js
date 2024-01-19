const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.joeRoute);
routes.get('/stella', lesson1Controller.stellaRoute);

module.exports = routes;