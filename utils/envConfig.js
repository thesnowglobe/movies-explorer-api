const {
  PORT = 3000,
  MONGO = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  NODE_ENV,
  JWT_SECRET,
} = process.env;

const SECRET_KEY = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';

module.exports = {
  PORT,
  MONGO,
  SECRET_KEY,
};
