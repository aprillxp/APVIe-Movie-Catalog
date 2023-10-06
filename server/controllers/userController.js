const { Movie } = require("../models");

class UserController {
  static async getUserMovies(req, res, next) {
    try {
      const movies = await Movie.findAll();

      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }

  static async getOneUserMovies(req, res, next) {
    try {
      const movieDetail = await Movie.findByPk(req.params.id);

      res.status(200).json(movieDetail);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
