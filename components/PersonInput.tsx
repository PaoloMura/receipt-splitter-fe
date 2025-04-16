import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

type PersonInputProps = {
  name: string;
  setName: (name: string) => void;
  onRemove: () => void;
};

export function PersonInput({ name, setName, onRemove }: PersonInputProps) {
  return (
    <View style={styles.inputRow}>
      <TextInput style={styles.input} onChangeText={setName} value={name} />
      <TouchableOpacity onPress={onRemove} style={styles.iconButton}>
        <FontAwesome name="minus" size={24} color="white" />
      </TouchableOpacity>
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
