import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Tab from "../../components/Tab";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/banner.png")} style={styles.image} />
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Universidade de Brasília</Text>
        </View>
      </View>

      <ScrollView>
        <Text style={styles.text}>CAMPUS</Text>
        <View
          style={{ flexDirection: "column", justifyContent: "space-around" }}
        >
          <Tab
            onClick={() => navigation.navigate("Campus")}
            value="Darcy Ribeiro"
          />
          <Tab onClick={() => navigation.navigate("Campus")} value="FCE" />
          <Tab onClick={() => navigation.navigate("Campus")} value="FGA" />
          <Tab onClick={() => navigation.navigate("Campus")} value="FUP" />
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
  image: { width: "100%", resizeMode: "contain" },
  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
    alignContent: "center",
  },
  text: {
    fontFamily: "Anton_400Regular",
    fontSize: 26,
    marginHorizontal: "1%",
    alignSelf: "center",
  },
  line: {
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 2,
  },
});
