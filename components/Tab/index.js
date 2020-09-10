import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export default function Tab(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: "90%",
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "rgb(0,104,180)",
  },
  buttonType: {
    fontSize: 16,
    width: "100%",
    fontWeight: "bold",
  },
  text: {
    fontFamily: "UnB_Pro_Bold",
    fontSize: 25,
  },
});
