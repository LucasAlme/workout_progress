import React, { useState } from "react";
import {
  AddMoreExTitle,
  AddedMoreEx,
  ButtonContainer,
  Container,
  ContainerRow,
  Content,
  IconMore,
  List,
  Title,
} from "./styles";
import Input from "../../components/input";
import { ExercisesProps } from "../../interface/home";
import Button from "../../components/button";
import { useDispatch } from "react-redux";
import { updateWorkout } from "../../redux/actions";
import Toast from "react-native-simple-toast";
import { ScrollView } from "react-native";
import {
  ButtonTitle,
  TitleInput,
  ToastMessageHome,
} from "../../enums/homeEnum";

interface WorkoutListProps {
  item: ExercisesProps;
  index: number;
}
function Home(): React.JSX.Element {
  const [workoutName, setWorkoutName] = useState("");
  const dispatch = useDispatch();
  const [exercises, setExercises] = useState<ExercisesProps[]>([]);

  const [currentExercise, setCurrentExercise] = useState({} as ExercisesProps);

  const createWorkout = () => {
    const workout = { name: workoutName, exercises: exercises };
    dispatch(updateWorkout(workout));
    Toast.show(ToastMessageHome.CREATE_TRAINING_SUCCESS_MESSAGE, Toast.LONG);
    setExercises([]);
    setCurrentExercise({} as ExercisesProps);
    setWorkoutName("");
  };

  const handleNewExercise = () => {
    if (exercises.length === 0) {
      setExercises([{}]);
    } else {
      setExercises([...exercises, {}]);
    }
  };

  const handleCreateExercise = (item: ExercisesProps, index: number) => {
    item.created = true;

    if (!item.name || !item.weight || !item.unit || !item.frequence) {
      Toast.show(ToastMessageHome.INSERT_ALL_INPUTS, Toast.LONG);
      return;
    }
    const updatedExercises = [...exercises];

    if (exercises.length === 1) {
      updatedExercises.splice(0, 1, item);
      setExercises(updatedExercises);
      Toast.show(ToastMessageHome.CREATE_WORKOUT_SUCCESS_MESSAGE, Toast.LONG);
      return;
    }
    updatedExercises.splice(index, 1, item);
    setExercises(updatedExercises);
    Toast.show(ToastMessageHome.CREATE_WORKOUT_SUCCESS_MESSAGE, Toast.LONG);
  };

  return (
    <Container>
      <ScrollView>
        <Content>
          <Title>Cadastre seu treino</Title>
        </Content>

        <Input
          title={TitleInput.TITLE_WORKOUT}
          value={workoutName}
          onChangeText={(name) => setWorkoutName(name)}
          editabled
        />

        <List
          data={exercises}
          scrollEnabled={false}
          renderItem={({ item, index }: WorkoutListProps) => (
            <>
              <Input
                title={TitleInput.TITLE_EXERCISE}
                containerStyle={{ paddingTop: 20 }}
                value={item.name}
                editabled={!exercises[index].created}
                onChangeText={(name) =>
                  setCurrentExercise({ ...currentExercise, name: name })
                }
              />

              <ContainerRow>
                <Input
                  title={TitleInput.TITLE_WEIGHT}
                  containerStyle={{ width: "50%", paddingTop: 20 }}
                  value={item.weight}
                  editabled={!exercises[index].created}
                  onChangeText={(weight) =>
                    setCurrentExercise({ ...currentExercise, weight: weight })
                  }
                />
                {/* Todo: Unit Picker */}
                <Input
                  title={TitleInput.TITLE_UNIT}
                  containerStyle={{ width: "50%", paddingTop: 20 }}
                  value={item.unit}
                  editabled={!exercises[index].created}
                  onChangeText={(unit: string) =>
                    setCurrentExercise({ ...currentExercise, unit: unit })
                  }
                />
              </ContainerRow>
              <Input
                title={TitleInput.TITLE_FREQUENCE}
                containerStyle={{ width: "50%", paddingTop: 20 }}
                value={item.frequence}
                editabled={!exercises[index].created}
                onChangeText={(freq: string) =>
                  setCurrentExercise({ ...currentExercise, frequence: freq })
                }
              />

              <ButtonContainer>
                <Button
                  disabled={exercises[index].created}
                  title={
                    exercises[index].created
                      ? ButtonTitle.CREATED
                      : ButtonTitle.CREATE_EXERCISE
                  }
                  onPress={() => handleCreateExercise(currentExercise, index)}
                />
              </ButtonContainer>
            </>
          )}
        />

        <AddedMoreEx onPress={handleNewExercise}>
          <IconMore name="add-circle-outline" />
          <AddMoreExTitle>Adicione um exercício</AddMoreExTitle>
        </AddedMoreEx>
      </ScrollView>
      <ButtonContainer>
        <Button
          title={ButtonTitle.CREATE_TRAINING}
          onPress={() => createWorkout()}
        />
      </ButtonContainer>
    </Container>
  );
}

export default Home;
