import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Campus(props) {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Cursos"
        color="#f194ff"
        onPress={() => navigation.navigate("Cursos")}
        value="Campus"
      />
    </View>
  );
}
