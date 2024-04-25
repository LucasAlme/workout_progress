import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const List = styled.FlatList``;
export const Content = styled.View`
  padding: 20px 0px;
`;
export const ContentList = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.black};
  padding: 20px;
  border-radius: 20px;
`;

export const WokrkoutTitle = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 22px;
`;

export const ExerciseQuantity = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
`;

export const PaddingDefault = styled.View`
  padding: 0px 20px;
`;
