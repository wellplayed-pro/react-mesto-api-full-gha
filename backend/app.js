const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const router = require('./routes');
const errorsHandler = require('./middlewares/errorsHandler');

const { PORT = 3000 } = process.env;
const app = express();
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');
app.use(router);
app.use(errors());
app.use(errorsHandler);

app.listen(3000, () => {
  console.log(`Сервер запущен! Порт: ${PORT}`);
});
