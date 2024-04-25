import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import {
  Container,
  Content,
  ContentList,
  ExerciseQuantity,
  List,
  PaddingDefault,
  Title,
  WokrkoutTitle,
} from "./styles";
import { WorkoutProps } from "../../interface/home";

interface ListProps {
  item: WorkoutProps;
}
function History(): React.JSX.Element {
  const workoutList = useSelector((state) => state.workout.workout);

  console.log(workoutList);
  return (
    <Container>
      <PaddingDefault>
        <Content>
          <Title>Histórico de treinos</Title>
        </Content>
        <List
          data={workoutList}
          ItemSeparatorComponent={() => <View style={{ paddingTop: 20 }} />}
          renderItem={({ item }: ListProps) => (
            <ContentList>
              <WokrkoutTitle>{item.name}</WokrkoutTitle>
              <ExerciseQuantity>
                {item.exercises.length} exercícios
              </ExerciseQuantity>
            </ContentList>
          )}
        />
      </PaddingDefault>
    </Container>
  );
}

export default History;
