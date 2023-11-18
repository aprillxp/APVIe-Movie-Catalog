import {
  MOVIE_FETCH_REQUEST,
  MOVIE_FETCH_SUCCESS,
  MOVIEID_FETCH_SUCCESS,
} from "../actions/actionType";

const initalState = {
  movies: [],
  movie: null,
  loading: false,
};

export default function movieReducer(state = initalState, action) {
  switch (action.type) {
    case MOVIE_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: true,
      };
    case MOVIEID_FETCH_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
}
