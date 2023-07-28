const router = require('express').Router();
const ErrorNotFound = require('../errors/errorNotFound');
const userRoutes = require('./users');
const cardRoutes = require('./cards');
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { validateCreateUser, validateLogin } = require('../utils/regex');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.post('/signup', validateCreateUser, createUser);
router.post('/signin', validateLogin, login);
router.use(auth);
router.use('/users', userRoutes);
router.use('/cards', cardRoutes);

router.use('*', (req, res, next) => {
  next(new ErrorNotFound('Неверный адрес ссылки'));
});

module.exports = router;
