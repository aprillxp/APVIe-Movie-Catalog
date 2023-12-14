import { FETCH_CASTS_SUCCESS } from "./actionType";

const BASE_URL = "http://localhost:3000";

export const fetchCastsSuccess = (payload) => {
  return { type: FETCH_CASTS_SUCCESS, payload };
};

export const fetchCasts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + "/pub/casts");
      const data = await response.json();
      if (!response.ok) throw data;
      dispatch(fetchCastsSuccess(data));
    } catch (error) {
      throw error;
    }
  };
};
