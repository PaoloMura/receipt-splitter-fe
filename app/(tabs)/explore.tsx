import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { styles } from "@/constants/styles";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ThemedText type="title">Information</ThemedText>
      <ThemedText type="default">Some info here</ThemedText>
    </View>
  );
}
