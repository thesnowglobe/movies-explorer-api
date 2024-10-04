const Movie = require('../models/movie');
const BadRequestError = require('../errors/bad-request-error');
const NotFoundError = require('../errors/not-found-error');
const ForbiddenError = require('../errors/forbidden-error');
const {
  MOVIE_NOT_FOUND,
  CREATE_MOVIE_ERROR,
  DELETE_MOVIE_ERROR,
  VALIDATION_ERROR,
  CAST_ERROR,
  UNAUTHORIZED,
  SUCCESS,
} = require('../constants/errorsMessages');

module.exports.getMovies = (req, res, next) => {
  const owner = req.user._id;

  Movie.find({}, null, {limit: 100})
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    nameRU,
    nameEN,
    movieId,
  } = req.body;

  const owner = req.user._id;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner,
    nameRU,
    nameEN,
    movieId,
  })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === VALIDATION_ERROR) {
        next(new BadRequestError(CREATE_MOVIE_ERROR));
      } else {
        next(err);
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(MOVIE_NOT_FOUND);
      }
      if (movie.owner.toString() !== req.user._id.toString()) {
        throw new ForbiddenError(DELETE_MOVIE_ERROR);
      }
      return Movie.remove(movie);
    })
    .then(() => res.status(200).send({ message: SUCCESS }))
    .catch((err) => {
      if (err.name === CAST_ERROR) {
        next(new BadRequestError(UNAUTHORIZED));
      } else {
        next(err);
      }
    });
};
