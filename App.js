//Cuida da parte de gestos do native
import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

import Routes from "./router";

export default function App() {
  //Abre o app só depois de carregar a font
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );
}
