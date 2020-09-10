import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Tab from "../../components/Tab";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Images/banner.png")}
        style={styles.image}
      />

      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Universidade de Brasília</Text>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.text}>CAMPUS</Text>
        <View
          style={{ flexDirection: "column", justifyContent: "space-around" }}
        >
          <Tab
            onClick={() => navigation.navigate("CURSOS")}
            value="Darcy Ribeiro"
          />
          <Tab onClick={() => navigation.navigate("CURSOS")} value="FCE" />
          <Tab onClick={() => navigation.navigate("CURSOS")} value="FGA" />
          <Tab onClick={() => navigation.navigate("CURSOS")} value="FUP" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa toda o espaço da tela
    width: "100%", //preenche 100% da tela
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 8,
    backgroundColor: "#003A7A",
    alignItems: "center",
  },
  image: {
    position: "relative",
    top: 0,
    width: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
    alignItems: "center", //centered horizontally
    justifyContent: "center", ///centered vertically
    textAlignVertical: "center",
  },
  text: {
    fontFamily: "UnB_Pro_Bold",
    fontSize: 26,
    marginHorizontal: "1%",
    color: "black",
    alignSelf: "center",
  },
  title: {
    fontFamily: "UnB_Pro_Bold",
    color: "white",
    fontSize: 30,
  },
});
