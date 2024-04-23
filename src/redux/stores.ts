import { combineReducers, createStore } from "redux";
import { WorkoutReducer } from "./reducers";

const rootReducer = combineReducers({
  workout: WorkoutReducer,
});

export const store = createStore(rootReducer);
