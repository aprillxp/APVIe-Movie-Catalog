const { Movie, Cast, User, Genre } = require("../models");

class UserController {
  static async getCasts(req, res, next) {
    try {
      const casts = await Cast.findAll({
        order: [["name", "desc"]],
      });
      res.json(casts);
    } catch (error) {
      next(error);
    }
  }
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
      const { slug } = req.params;
      const data = {
        where: { slug },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [
          {
            model: User,
            attributes: { exclude: ["password", "createdAt", "updatedAt"] },
          },
          {
            model: Genre,
          },
          {
            model: Cast,
            attributes: ["name", "profilePict"],
          },
        ],
      };
      const movie = await Movie.findOne(data);
      if (!movie) throw { name: "Not Found" };
      res.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
