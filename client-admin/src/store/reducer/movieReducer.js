import {
  EDIT_MOVIE_FAILED,
  EDIT_MOVIE_REQUEST,
  EDIT_MOVIE_SUCCESS,
  MOVIE_FETCH_FAILED,
  MOVIE_FETCH_REQUEST,
  MOVIE_FETCH_SUCCESS,
} from "../actions/actionType";

const initalState = {
  movies: [],
  loading: false,
  error: null,
};

export default function movieReducer(state = initalState, action) {
  switch (action.type) {
    case MOVIE_FETCH_REQUEST:
      // console.log(action, '<-- reducer');
      return {
        ...state,
        loading: true,
      };
    case MOVIE_FETCH_SUCCESS:
      // console.log(action, '<-- reducer');
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case MOVIE_FETCH_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case EDIT_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_MOVIE_SUCCESS:
      const updateMovie = state.movies.map((movie) => {
        movie.id === movie.payload.id ? movie.payload : movie;
      });
      return {
        ...state,
        movies: updateMovie,
        loading: false,
      };
    case EDIT_MOVIE_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
