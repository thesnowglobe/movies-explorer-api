const routes = require('express').Router();
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const NotFoundError = require('../errors/not-found-error');
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');
const { validateSignIn, validateSignUp } = require('../middlewares/validation');
const { SERVER_NOT_FOUND } = require('../constants/errorsMessages');

routes.post('/signin', validateSignIn, login);
routes.post('/signup', validateSignUp, createUser);

routes.use('/users', auth, usersRoutes);
routes.use('/movies', auth, moviesRoutes);

routes.use('*', auth, (req, res, next) => {
  next(new NotFoundError(SERVER_NOT_FOUND));
});

module.exports = routes;
