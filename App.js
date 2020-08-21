//Cuida da parte de gestos do native
import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { activateKeepAwake } from "expo-keep-awake";

import Routes from "./router";

export default function App() {
  activateKeepAwake();

  //Abre o app só depois de carregar a font
  let [fontsLoaded] = useFonts({
    UnB_Pro_Black: require("./assets/Fonts/UnB_Pro_Black.otf"),
    UnB_Pro_Bold: require("./assets/Fonts/UnB_Pro_Bold.otf"),
    UnB_Pro_Regular: require("./assets/Fonts/UnB_Pro_Regular.otf"),
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
