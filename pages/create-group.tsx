import { InputRow } from "@/components/InputRow";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";

export default function CreateGroup() {
  const [people, setPeople] = React.useState<string[]>([""]);

  const updateName = (index: number, name: string) => {
    const updatedPeople = [...people];
    updatedPeople[index] = name;
    setPeople(updatedPeople);
  };

  const removeName = (index: number) => {
    const updatedPeople = people.filter((_, i) => i !== index);
    setPeople(updatedPeople);
  };

  const addName = () => {
    setPeople([...people, ""]);
  };

  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Create a group</ThemedText>
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Add people to the group</ThemedText>
      </ThemedView>

      {people.map((person, index) => (
        <InputRow
          key={index}
          value={person}
          setValue={(name) => updateName(index, name)}
          onRemove={() => removeName(index)}
        />
      ))}

      <TouchableOpacity onPress={addName} style={styles.iconButton}>
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>

      <Pressable
        onPress={() => console.log("Upload receipt")}
        style={styles.button}
      >
        <ThemedText type="link">Upload receipt</ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 50,
    marginTop: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  iconButton: {
    padding: 10,
  },
});
