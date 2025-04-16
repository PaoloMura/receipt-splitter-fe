import { Item } from "@/app/(tabs)";
import Button from "@/components/Button";
import SelectInput from "@/components/SelectInput";
import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";

type SelectItemsProps = {
  person: string;
  items: Item[];
  setItems: (items: Item[]) => void;
  onNext: () => void;
};

export default function SelectItems({
  person,
  items,
  setItems,
  onNext,
}: SelectItemsProps) {
  const filteredItems = items
    .map((item, index) => ({
      ...item,
      index,
    }))
    .filter((item) => item.name === person || item.name === "");

  const updateItem = (index: number) => {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, name: person };
      }
      return item;
    });

    setItems(updatedItems);
  };

  return (
    <SafeAreaView style={styles2.safeArea}>
      <ScrollView contentContainerStyle={styles2.scrollViewContent}>
        <View style={styles2.container}>
          <ThemedText type="title">{person}</ThemedText>
          <ThemedText type="default">Choose the items you consumed:</ThemedText>

          {filteredItems.map((item, index) => (
            <SelectInput
              key={index}
              label={item.label}
              checked={item.name === person}
              onPress={() => updateItem(item.index)}
            />
          ))}

          <Button label="Next" onPress={onNext} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles2 = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures the content stretches to fit the screen
    justifyContent: "center", // Adjust alignment as needed
    padding: 16, // Add padding for better spacing
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
