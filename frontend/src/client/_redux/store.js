import { createStore, combineReducers, applyMiddleware } from "redux";

import spesies from "../_reducers/species";
import auth from "../_reducers/auth";
import users from "../_reducers/users";
import pets from "../_reducers/pets";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  spesies,
  auth,
  users,
  pets
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
