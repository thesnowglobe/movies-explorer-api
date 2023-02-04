const usersRoutes = require('express').Router();

const {
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

const { validateUpdateUser } = require('../middlewares/validation');

usersRoutes.get('/me', getUserInfo);
usersRoutes.patch('/me', validateUpdateUser, updateUserInfo);

module.exports = usersRoutes;
