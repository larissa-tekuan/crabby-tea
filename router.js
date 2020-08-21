import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Campus from "./pages/Campus";
import Cursos from "./pages/Cursos";
const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Campus" component={Campus} />
        <Stack.Screen name="Cursos" component={Cursos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
