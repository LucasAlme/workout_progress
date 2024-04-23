import { styled } from "styled-components/native";

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  padding-bottom: 5px;
`;

export const Container = styled.TouchableOpacity`
  border-width: 1px;
  height: 40px;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 20px;
`;
