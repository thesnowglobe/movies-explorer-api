const VALIDATION_ERROR = 'ValidationError';

const CAST_ERROR = 'CastError';

const UNAUTHORIZED = 'Необходима авторизация';

const SERVER_ERROR = 'На сервере произошла ошибка';

const USER_NOT_FOUND = 'Пользователь с указанным id не найден';

const CREATE_USER_ERROR = 'Переданы некорректные данные при создании пользователя';

const USER_CONFLICT_ERROR = 'Пользователь с таким email уже существует';

const UPDATE_USER_ERROR = 'Переданы некорректные данные при обновлении профиля';

const MOVIE_NOT_FOUND = 'Фильм с указанным id не найден';

const CREATE_MOVIE_ERROR = 'Переданы некорректные данные при создании фильма';

const DELETE_MOVIE_ERROR = 'Недостаточно прав для удаления фильма';

const INVALID_ID = 'Невалидный id';

const SERVER_NOT_FOUND = 'Запрашиваемый ресурс не найден';

const SUCCESS = 'Success';

const INVALID_EMAIL = 'Введен некорректный email';

const AUTHORIZATION_ERROR = 'Ошибка авторизации';

module.exports = {
  VALIDATION_ERROR,
  CAST_ERROR,
  UNAUTHORIZED,
  SERVER_ERROR,
  USER_NOT_FOUND,
  CREATE_USER_ERROR,
  USER_CONFLICT_ERROR,
  UPDATE_USER_ERROR,
  MOVIE_NOT_FOUND,
  CREATE_MOVIE_ERROR,
  DELETE_MOVIE_ERROR,
  INVALID_ID,
  SERVER_NOT_FOUND,
  SUCCESS,
  INVALID_EMAIL,
  AUTHORIZATION_ERROR,
};
