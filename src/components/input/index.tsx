import React from "react";
import {
  Container,
  ErrorText,
  InputContainer,
  InputText,
  TitleText,
} from "./styles";
import { ViewStyle } from "react-native";

interface TextInputProps {
  title: string;
  width?: string;
  containerStyle?: ViewStyle;
  value: string;
  onChangeText: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
}
function Input(props: TextInputProps): React.JSX.Element {
  return (
    <InputContainer style={props.containerStyle}>
      <TitleText>{props.title}</TitleText>
      <Container width={props.width}>
        <InputText value={props.value} onChangeText={props.onChangeText} />
      </Container>
      {props.error && <ErrorText>{props.errorMessage}</ErrorText>}
    </InputContainer>
  );
}

export default Input;
