const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controller');
const autMiddleware = require('../utils/auth.middleware');

router.get('/',moviesController.getMovies);

router.get('/:movieId',moviesController.getMoviesById);

router.post('/',moviesController.newMovie);

router.put('/:movieId',moviesController.updateMovie);

router.delete('/:movieId',moviesController.deleteMovie);

module.exports = router;