import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  Container,
  ContainerRow,
  Content,
  Title,
} from "./styles";
import Input from "../../components/input";
import { WorkoutProps } from "../../interface/home";
import Button from "../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { updateWorkout } from "../../redux/actions";

function Home(): React.JSX.Element {
  const [workout, setWorkout] = useState({} as WorkoutProps);
  const dispatch = useDispatch();

  const createWorkout = () => {
    dispatch(updateWorkout(workout));
  };

  return (
    <Container>
      <Content>
        <Title>Cadastre seu treino</Title>
      </Content>

      <Input
        title="Nome do treino"
        value={workout.workoutName}
        onChangeText={(workoutName) =>
          setWorkout({ ...workout, workoutName: workoutName })
        }
      />
      <Input
        title="Nome do exercício"
        containerStyle={{ paddingTop: 20 }}
        value={workout.exerciseName}
        onChangeText={(exerciseName) =>
          setWorkout({ ...workout, exerciseName: exerciseName })
        }
      />
      <ContainerRow>
        <Input
          title="Peso"
          containerStyle={{ width: "50%", paddingTop: 20 }}
          value={workout.weight}
          onChangeText={(weight) => setWorkout({ ...workout, weight: weight })}
        />
        {/* Todo: Unit Picker */}
        <Input
          title="Unidade"
          containerStyle={{ width: "50%", paddingTop: 20 }}
          value={workout.unit}
          onChangeText={(unit: string) =>
            setWorkout({ ...workout, unit: unit })
          }
        />
      </ContainerRow>
      <Input
        title="Repetições"
        containerStyle={{ width: "50%", paddingTop: 20 }}
        value={workout.frequence}
        onChangeText={(freq: string) =>
          setWorkout({ ...workout, frequence: freq })
        }
      />

      <ButtonContainer>
        <Button title="Criar Treino" onPress={() => createWorkout()} />
      </ButtonContainer>
    </Container>
  );
}

export default Home;
