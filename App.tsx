/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import "react-native-gesture-handler";
import React from "react";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./baseStyles";
import { Provider } from "react-redux";
import { store } from "./src/redux/stores";

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
