export interface ExercisesProps {
  name: string;
  weight: string;
  unit: string;
  frequence: string;
  created?: boolean;
}

export interface WorkoutProps {
  name: string;
  exercises: ExercisesProps[];
}
