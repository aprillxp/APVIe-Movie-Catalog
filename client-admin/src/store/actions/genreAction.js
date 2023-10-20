import {
  GENREID_FETCH_SUCCESS,
  GENRE_FETCH_REQUEST,
  GENRE_FETCH_SUCCESS,
} from "./actionType";

import Swal from "sweetalert2";
const swal = (icon, title) => {
  Swal.fire({
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 1000,
  });
};

const BASE_URL = "http://localhost:3000";

export const genreFetchSuccess = (payload) => {
  return {
    type: GENRE_FETCH_SUCCESS,
    payload,
  };
};

export const genreFetchRequest = () => {
  return {
    type: GENRE_FETCH_REQUEST,
  };
};

export const genreFetchById = (payload) => {
  return {
    type: GENREID_FETCH_SUCCESS,
    payload,
  };
};

export const fetchAllGenre = () => {
  return async (dispatch) => {
    dispatch(genreFetchSuccess());
    try {
      const response = await fetch(BASE_URL + "/genres", {
        method: "get",
        headers: {
          access_token: localStorage.access_token,
        },
      });
      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      setTimeout(() => {
        dispatch(genreFetchSuccess(data));
      }, 1000);
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const fetchGenreById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/genres/" + id, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      dispatch(genreFetchById(data));
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const createGenre = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/genres", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      dispatch(fetchAllGenre());
      swal("success", "Genre added.");
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const editGenre = (id, payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/genres/" + id, {
        method: "patch",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      dispatch(fetchAllGenre());
      swal("success", "Genre edited.");
    } catch (error) {
      swal("error", error.message);
    }
  };
};

export const deleteGenre = (id) => {
  return async (dispatch) => {
    try {
    } catch (error) {
      swal("error", error.message);
    }
  };
};
