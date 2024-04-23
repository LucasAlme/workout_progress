import { WorkoutProps } from "../interface/home";
import { UPDATE_WORKOUT } from "./reducers";

export type UpdateWorkout = {
  type: typeof UPDATE_WORKOUT;
  payload: WorkoutProps;
};

export const updateWorkout = (item: WorkoutProps): UpdateWorkout => ({
  type: UPDATE_WORKOUT,
  payload: item,
});
