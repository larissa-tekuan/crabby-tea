import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Tab from "../../components/Tab";

export default function Campus(props) {
  const navigation = useNavigation();

  return (
    <View>
      <Tab
        onClick={() => navigation.navigate("CURSOS")}
        value="Computação"
        style={styles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "white",
  },
});
