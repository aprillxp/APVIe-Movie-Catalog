import {
  GENRE_FETCH_SUCCESS,
  GENRE_FETCH_REQUEST,
  GENREID_FETCH_SUCCESS,
} from "../actions/actionType";

const initalState = {
  loading: false,
  genres: [],
  genre: null,
};

export default function genreReducer(state = initalState, action) {
  switch (action.type) {
    case GENRE_FETCH_SUCCESS:
      return {
        ...state,
        genres: action.payload,
        loading: false,
      };
    case GENRE_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GENREID_FETCH_SUCCESS:
      return {
        ...state,
        genre: action.payload,
      };
    default:
      return state;
  }
}
