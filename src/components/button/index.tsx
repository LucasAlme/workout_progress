import React from "react";
import { Container, Title } from "./styles";
import { GestureResponderEvent, ViewStyle } from "react-native";

interface ButtonProps {
  title: string;
  width?: string;
  containerStyle?: ViewStyle;
  onPress: (event: GestureResponderEvent) => void;
}
function Button(props: ButtonProps): React.JSX.Element {
  return (
    <Container style={props.containerStyle} onPress={props.onPress}>
      <Title>{props.title}</Title>
    </Container>
  );
}

export default Button;
