import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

import movieReducer from "./movieReducer";
import genreReducer from "./genreReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  movieReducer,
  genreReducer,
  userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
