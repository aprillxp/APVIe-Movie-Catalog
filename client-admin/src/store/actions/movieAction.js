import {
  ADD_MOVIE_FAILED,
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  EDIT_MOVIE_FAILED,
  EDIT_MOVIE_REQUEST,
  EDIT_MOVIE_SUCCESS,
  MOVIEID_FETCH_FAILED,
  MOVIEID_FETCH_REQUEST,
  MOVIEID_FETCH_SUCCESS,
  MOVIE_FETCH_FAILED,
  MOVIE_FETCH_REQUEST,
  MOVIE_FETCH_SUCCESS,
} from "./actionType";

const BASE_URL = "http://localhost:3000";

export const fetchRequest = () => {
  return {
    type: MOVIE_FETCH_REQUEST,
  };
};

export const fetchSuccess = (data) => {
  return {
    type: MOVIE_FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchFailed = (data) => {
  return {
    type: MOVIE_FETCH_FAILED,
    payload: data,
  };
};

export const asyncFetchMovies = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());

    try {
      const response = await fetch(BASE_URL + "/movies", {
        method: "get",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw { message: "Something Wrong" };
      }

      const data = await response.json();

      setTimeout(() => {
        dispatch(fetchSuccess(data));
      }, 2000);
    } catch (error) {
      dispatch(fetchFailed(error));
    }
  };
};

export const addRequest = () => {
  return {
    type: ADD_MOVIE_REQUEST,
  };
};

export const addSuccess = (data) => {
  return {
    type: ADD_MOVIE_SUCCESS,
    payload: data,
  };
};

export const addFailed = (data) => {
  return {
    type: ADD_MOVIE_FAILED,
    payload: data,
  };
};

export const asyncCreateMovie = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/movies", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw { message: "Something Wrong" };
      }

      const data = await response.json();

      return data;
    } catch (error) {
      dispatch(fetchFailed(error));
      throw error;
    }
  };
};

export const editRequest = () => {
  return {
    type: EDIT_MOVIE_REQUEST,
  };
};

export const editSuccess = (data) => {
  return {
    type: EDIT_MOVIE_SUCCESS,
    payload: data,
  };
};

export const editFailed = (data) => {
  return {
    type: EDIT_MOVIE_FAILED,
    payload: data,
  };
};

export const asyncEditMovies = (movieId, movieData, navigate) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/movies/" + movieId, {
        method: "patch",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw data;
      }

      dispatch(asyncFetchMovies());
    } catch (error) {
      dispatch(editFailed(error));
    }
  };
};

export const fetchMovieIdRequest = () => {
  return {
    type: MOVIEID_FETCH_REQUEST,
  };
};

export const fetchMovieIdSuccess = (data) => {
  return {
    type: MOVIEID_FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchMovieIdFailed = (data) => {
  return {
    type: MOVIEID_FETCH_FAILED,
    payload: data,
  };
};

export const asyncDetailMovie = (id) => {
  return async (dispatch) => {
    dispatch(fetchMovieIdRequest());
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

      dispatch({ type: MOVIEID_FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch(fetchMovieIdFailed(error));
    }
  };
};
