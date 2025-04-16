import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import { InputRow } from "@/components/InputRow";
import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { StyleSheet, View } from "react-native";

type CreateGroupProps = {
  people: string[];
  setPeople: (people: string[]) => void;
  onNext: () => void;
};

export default function CreateGroup({ people, setPeople, onNext }: CreateGroupProps) {

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
      <ThemedText type="title">Create a group</ThemedText>
      
      <ThemedText type="default">Add people to the group</ThemedText>

      {people.map((person, index) => (
        <InputRow
          key={index}
          value={person}
          setValue={(name) => updateName(index, name)}
          onRemove={() => removeName(index)}
        />
      ))}

      <IconButton onPress={addName} name="plus" />

      <Button onPress={onNext} label="Next" />
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
