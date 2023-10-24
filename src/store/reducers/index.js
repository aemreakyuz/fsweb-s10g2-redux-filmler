import { combineReducers } from "redux";

import movieReducer from "./movieReducer.js";

export const reducers = combineReducers({
  movie: movieReducer,
});
