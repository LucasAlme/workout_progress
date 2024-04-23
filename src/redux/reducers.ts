import { WorkoutProps } from "../interface/home";

export const UPDATE_WORKOUT = "UPDATE_WORKOUT";

export interface SetWorkoutFormAction {
  type: typeof UPDATE_WORKOUT;
  payload: WorkoutProps;
}
const initialState = {
  workout: [],
};

export const WorkoutReducer = (
  state = initialState,
  action: SetWorkoutFormAction
) => {
  switch (action.type) {
    case "UPDATE_WORKOUT": {
      const newWorkout = action.payload;
      state.workout.push(newWorkout);
      return state;
    }

    default:
      return state;
  }
};
