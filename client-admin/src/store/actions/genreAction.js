import {
  ADD_GENRE_FAILED,
  ADD_GENRE_REQUEST,
  ADD_GENRE_SUCCESS,
  EDIT_GENRE_FAILED,
  EDIT_GENRE_REQUEST,
  EDIT_GENRE_SUCCESS,
  GENRE_FETCH_FAILED,
  GENRE_FETCH_REQUEST,
  GENRE_FETCH_SUCCESS,
} from "./actionType";

const BASE_URL = "http://localhost:3000";

export const fetchRequest = () => {
  return {
    type: GENRE_FETCH_REQUEST,
  };
};

export const fetchSuccess = (data) => {
  return {
    type: GENRE_FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchFailed = (data) => {
  return {
    type: GENRE_FETCH_FAILED,
    payload: data,
  };
};

export const asyncFetchGenres = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await fetch(BASE_URL + "/genres", {
        method: "get",
        headers: {
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
    type: ADD_GENRE_REQUEST,
  };
};

export const addSuccess = (data) => {
  return {
    type: ADD_GENRE_SUCCESS,
    payload: data,
  };
};

export const addFailed = (data) => {
  return {
    type: ADD_GENRE_FAILED,
    payload: data,
  };
};

export const asyncCreateGenre = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/genres", {
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
    type: EDIT_GENRE_REQUEST,
  };
};

export const editSuccess = (data) => {
  return {
    type: EDIT_GENRE_SUCCESS,
    payload: data,
  };
};

export const editFailed = (data) => {
  return {
    type: EDIT_GENRE_FAILED,
    payload: data,
  };
};

export const asyncEditGenre = (genreId, genreData, navigate) => {
  return (dispatch) => {
    dispatch(editRequest());
    fetch(BASE_URL + "/genres/" + genreId, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(genreData),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(editSuccess(data));
        navigate("/");
      })
      .catch((err) => {
        dispatch(editFailed(err));
      });
  };
};
