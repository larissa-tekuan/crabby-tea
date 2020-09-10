import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Tab from "../../components/Tab";

export default function About(props) {
  const navigation = useNavigation();

  return (
    <View>
      <Tab
        onClick={() => navigation.navigate("SOBRE")}
        value="Agronomia"
        style={styles.text}
      />
      <Tab
        onClick={() => navigation.navigate("SOBRE")}
        value="Arquivologia"
        style={styles.text}
      />
      <Tab
        onClick={() => navigation.navigate("SOBRE")}
        value="Computação"
        style={styles.text}
      />
      <Tab
        onClick={() => navigation.navigate("SOBRE")}
        value="Engenharia Ambiental"
        style={styles.text}
      />
      <Tab
        onClick={() => navigation.navigate("SOBRE")}
        value="Farmácia"
        style={styles.text}
      />
      <Tab
        onClick={() => navigation.navigate("SOBRE")}
        value="Letras Estrangeiras Aplicadas"
        style={styles.text}
      />
      <Tab
        onClick={() => navigation.navigate("SOBRE")}
        value="PBSL"
        style={styles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "rgb(0,58,122)",
  },
});
