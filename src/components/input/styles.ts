import styled, { DefaultTheme } from "styled-components/native";

interface ContainerProps {
  width?: string;
}

interface TextTitleProps {
  theme: DefaultTheme;
  editable: boolean;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ width }) => (width ? width : "100%")};
`;

export const InputText = styled.TextInput`
  border-width: 1px;
  color: ${({ theme, editable }) =>
    editable ? theme.colors.black : theme.colors.disabledGray};
  height: 40px;
  border-color: ${({ theme, editable }) =>
    editable ? theme.colors.black : theme.colors.disabledGray};
`;

export const TitleText = styled.Text<TextTitleProps>`
  font-size: 14px;
  color: ${({ theme, editable }) =>
    editable ? theme.colors.black : theme.colors.disabledGray};
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
