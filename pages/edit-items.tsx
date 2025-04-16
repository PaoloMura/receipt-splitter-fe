import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/styles";
import { InputRow } from "@/components/InputRow";
import { Item } from "@/app/(tabs)";
import Button from "@/components/Button";
import { ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";

type EditItemsProps = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  onNext: () => void;
};

const EditItems: React.FC<EditItemsProps> = ({ items, setItems, onNext }) => {
  const updateItemCost = (index: number, newCost: string) => {
    const updatedItems = [...items];
    updatedItems[index].cost = newCost;
    setItems(updatedItems);
  };

  const removeItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <SafeAreaView style={styles2.safeArea}>
      <ScrollView contentContainerStyle={styles2.scrollViewContent}>
        <View style={styles2.container}>
          <ThemedText type="title">Edit items</ThemedText>
          <ThemedText type="default">
            Make any corrections if necessary
          </ThemedText>

          {items.map((item, index) => (
            <InputRow
              key={index}
              label={item.label}
              value={item.cost}
              setValue={(val) => updateItemCost(index, val)}
              onRemove={() => removeItem(index)}
            />
          ))}

          <Button onPress={onNext} label="Next" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditItems;

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