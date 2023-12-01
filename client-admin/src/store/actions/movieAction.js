import {
  MOVIEID_FETCH_SUCCESS,
  MOVIE_FETCH_REQUEST,
  MOVIE_FETCH_SUCCESS,
} from "./actionType";
import Swal from "sweetalert2";
const BASE_URL = "http://localhost:3000";

const swal = (icon, title) => {
  Swal.fire({
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 1000,
  });
};

export const movieFetchRequest = () => {
  return {
    type: MOVIE_FETCH_REQUEST,
  };
};

export const movieFetchSuccess = (payload) => {
  return {
    type: MOVIE_FETCH_SUCCESS,
    payload,
  };
};

export const movieFetchById = (payload) => {
  return {
    type: MOVIEID_FETCH_SUCCESS,
    payload,
  };
};

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(movieFetchRequest());
    try {
      const response = await fetch(BASE_URL + "/movies", {
        method: "get",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      setTimeout(() => {
        dispatch(movieFetchSuccess(data));
      }, 1000);
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const fetchMovieDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/movies/" + id, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      setTimeout(() => {
        dispatch(movieFetchById(data));
      }, 1000);
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const createMovie = (inputMovieData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/movies", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(inputMovieData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }

      dispatch(fetchMovies());
      swal("success", "Movie added.");
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const editMovie = (id, inputMovieData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/movies/" + id, {
        method: "patch",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(inputMovieData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }

      dispatch(fetchMovies());
      swal("success", "Movie edited.");
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const deleteMovie = (id) => {
  return async (dispatch) => {
    try {
    } catch (error) {
      swal("error", error.message);
    }
  };
};
