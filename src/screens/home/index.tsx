import React, { useEffect, useState } from "react";
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
import { ExercisesProps, WorkoutProps } from "../../interface/home";
import Button from "../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { updateWorkout } from "../../redux/actions";
import Toast from "react-native-simple-toast";
import { ScrollView } from "react-native";

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
    Toast.show("Treino criado com sucesso!", Toast.LONG);
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
      Toast.show("É preciso inserir todos os campos!", Toast.LONG);
      return;
    }
    const updatedExercises = [...exercises];

    if (exercises.length === 1) {
      updatedExercises.splice(0, 1, item);
      setExercises(updatedExercises);
      Toast.show("Exercício criado com sucesso!", Toast.LONG);
      return;
    }
    updatedExercises.splice(index, 1, item);
    setExercises(updatedExercises);
    Toast.show("Exercício criado com sucesso!", Toast.LONG);
  };

  return (
    <Container>
      <ScrollView>
        <Content>
          <Title>Cadastre seu treino</Title>
        </Content>

        <Input
          title="Nome do treino"
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
                title="Nome do exercício"
                containerStyle={{ paddingTop: 20 }}
                value={item.name}
                editabled={!exercises[index].created}
                onChangeText={(name) =>
                  setCurrentExercise({ ...currentExercise, name: name })
                }
              />

              <ContainerRow>
                <Input
                  title="Peso"
                  containerStyle={{ width: "50%", paddingTop: 20 }}
                  value={item.weight}
                  editabled={!exercises[index].created}
                  onChangeText={(weight) =>
                    setCurrentExercise({ ...currentExercise, weight: weight })
                  }
                />
                {/* Todo: Unit Picker */}
                <Input
                  title="Unidade"
                  containerStyle={{ width: "50%", paddingTop: 20 }}
                  value={item.unit}
                  editabled={!exercises[index].created}
                  onChangeText={(unit: string) =>
                    setCurrentExercise({ ...currentExercise, unit: unit })
                  }
                />
              </ContainerRow>
              <Input
                title="Repetições"
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
                    exercises[index].created ? "Criado!" : "Criar Exercicio"
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
        <Button title="Criar Treino" onPress={() => createWorkout()} />
      </ButtonContainer>
    </Container>
  );
}

export default Home;
