/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/home";
import { createStackNavigator } from "@react-navigation/stack";
import Metrics from "../screens/metrics";
import History from "../screens/history";
function Routes(): React.JSX.Element {
  const Tab = createMaterialBottomTabNavigator();
  const Stack = createStackNavigator();
  const BottomTabRouter = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Início",
            tabBarIcon: () => <Icon name="home" type="feather" />,
          }}
        />
        {/* <Tab.Screen
          name="Metrics"
          component={Metrics}
          options={{
            tabBarLabel: "Métricas",
            tabBarIcon: () => <Icon name="straighten" type="material" />,
          }}
        /> */}
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarLabel: "Histórico",
            tabBarIcon: () => <Icon name="time-outline" type="ionicon" />,
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={BottomTabRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
