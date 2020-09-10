import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import About from "./pages/About";
const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HOME"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CURSOS" component={Cursos} />
        <Stack.Screen name="SOBRE" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
