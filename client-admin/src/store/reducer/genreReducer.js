import { GENRE_FETCH_SUCCESS } from "../actions/actionType";

const initalState = {
  genres: [],
};

export default function genreReducer(state = initalState, action) {
  switch (action.type) {
    case GENRE_FETCH_SUCCESS:
      // console.log(action, '<-- reducer');
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
}
