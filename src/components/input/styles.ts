import styled from "styled-components/native";

interface ContainerProps {
  width?: string;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ width }) => (width ? width : "100%")};
`;

export const InputText = styled.TextInput`
  border-width: 1px;
  color: ${({ theme }) => theme.colors.black};
  height: 40px;
`;

export const TitleText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  padding-bottom: 5px;
`;

export const InputContainer = styled.View`
  padding: 0px 20px;
`;

export const ErrorText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
  padding: 5px 0px;
`;
