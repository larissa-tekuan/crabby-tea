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
          name="HOME"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CAMPUS" component={Campus} />
        <Stack.Screen name="CURSOS" component={Cursos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
