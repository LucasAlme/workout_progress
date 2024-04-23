import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;
export const Content = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 22px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  padding: 30px 20px 0px 20px;
`;
