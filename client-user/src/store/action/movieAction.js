import {
  FETCH_MOVIE_BY_ID_REQUEST,
  FETCH_MOVIE_BY_ID_SUCCESS,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
} from "./actionType";

const BASE_URL = "http://localhost:3000";

export const fetchMovieRequest = () => {
  return { type: FETCH_MOVIE_REQUEST };
};

export const fetchMovieSuccess = (payload) => {
  return { type: FETCH_MOVIE_SUCCESS, payload };
};

export const fetchMovieByIdRequest = () => {
  return { type: FETCH_MOVIE_BY_ID_REQUEST };
};

export const fetchMovieByIdSuccess = (payload) => {
  return { type: FETCH_MOVIE_BY_ID_SUCCESS, payload };
};

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(fetchMovieRequest());
    try {
      const response = await fetch(BASE_URL + "/pub/movies");
      const data = await response.json();
      if (!response.ok) throw data;
      setTimeout(() => {
        dispatch(fetchMovieSuccess(data));
      }, 1000);
    } catch (error) {
      console.log(error, '< in action');
      throw error;
    }
  };
};

export const fetchMovieById = (slug) => {
  return async (dispatch) => {
    dispatch(fetchMovieByIdRequest());
    try {
      const response = await fetch(BASE_URL + `/pub/movies/${slug}`);
      const data = await response.json();
      if (!response.ok) throw data;
      setTimeout(() => {
        dispatch(fetchMovieByIdSuccess());
      }, 1000);
    } catch (error) {
      throw error;
    }
  };
};
