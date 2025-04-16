import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "./ThemedText";
import IconButton from "./IconButton";

type PersonInputProps = {
  label?: string;
  value: string;
  setValue: (name: string) => void;
  onRemove: () => void;
};

export function InputRow({
  label,
  value,
  setValue,
  onRemove,
}: PersonInputProps) {
  return (
    <View style={styles.inputRow}>
      {label && <ThemedText type="default">{label}</ThemedText>}
      <TextInput style={styles.input} onChangeText={setValue} value={value} />
      <IconButton name="minus" onPress={onRemove} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#fff",
    color: "#fff",
    padding: 10,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  iconButton: {
    padding: 10,
  },
});
