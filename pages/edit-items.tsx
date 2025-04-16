import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/styles";
import { View } from "react-native";

export default function EditItems() {
  return (
    <View style={styles.container}>
      <ThemedText type="title">Edit items</ThemedText>
      <ThemedText type="default">Make any corrections if necessary</ThemedText>
    </View>
  );
}
