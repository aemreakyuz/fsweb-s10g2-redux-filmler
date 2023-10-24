import { combineReducers } from "redux";

import movieReducer from "./movieReducer.js";
import favReducer from "./favReducer.js";

export const reducers = combineReducers({
  movie: movieReducer,
  favorites: favReducer,
});
