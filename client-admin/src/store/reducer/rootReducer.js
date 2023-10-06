import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import genreReducer from "./genreReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  genres: genreReducer,
});

export default rootReducer