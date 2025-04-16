import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { FontAwesome } from "@expo/vector-icons";

type SelectInputProps = {
  label: string;
  checked: boolean;
  onPress: () => void;
};

export default function SelectInput({
  label,
  checked,
  onPress,
}: SelectInputProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome
        name={checked ? "check-circle" : "circle"}
        size={24}
        color="white"
      />
      <ThemedText type="default">{label}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 8,
  },
});
