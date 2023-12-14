import {
  FETCH_MOVIE_BY_ID_REQUEST,
  FETCH_MOVIE_BY_ID_SUCCESS,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
} from "../action/actionType";

const initialState = {
  movies: [],
  movie: null,
  loading: true,
  error: "",
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };

    case FETCH_MOVIE_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
      };

    default:
      return state;
  }
}

export default movieReducer;
