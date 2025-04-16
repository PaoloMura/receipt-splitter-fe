import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/styles";
import { View } from "react-native";

export default function ShowTotals() {
  return (
    <View style={styles.container}>
      <ThemedText type="title">Totals</ThemedText>
      <ThemedText type="default">Here are the totals for the group</ThemedText>
    </View>
  );
}
