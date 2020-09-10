import React from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function About() {
  return (
    <View>
      <Text>Essa é uma página sobre</Text>
      <WebView
        style={{ marginTop: 20, width: 320, height: 230 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/embed/-ZZPOXn6_9w" }}
      />
    </View>
  );
}
