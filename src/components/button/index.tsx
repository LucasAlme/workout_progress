import React from "react";
import { Container, Title } from "./styles";
import { GestureResponderEvent, ViewStyle } from "react-native";

interface ButtonProps {
  title: string;
  width?: string;
  containerStyle?: ViewStyle;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}
function Button(props: ButtonProps): React.JSX.Element {
  return (
    <Container
      style={props.containerStyle}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Title>{props.title}</Title>
    </Container>
  );
}

export default Button;
