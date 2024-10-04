require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('cors');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const rateLimiter = require('./utils/rateLimiter');
const { PORT, MONGO } = require('./utils/envConfig');

const app = express();
app.options('*', cors());
app.use(cors());
app.use(express.json());
app.use(helmet());

mongoose.set('strictQuery', false);
mongoose.connect(MONGO);

app.use(requestLogger);
app.use(rateLimiter);
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
