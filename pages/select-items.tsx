import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/styles";
import { View } from "react-native";

export default function SelectItems() {
  return (
    <View style={styles.container}>
      <ThemedText type="title">Person name goes here</ThemedText>
      <ThemedText type="default">Choose the items you consumed</ThemedText>
    </View>
  );
}
