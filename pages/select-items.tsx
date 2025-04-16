import { Item } from "@/app/(tabs)";
import Button from "@/components/Button";
import SelectInput from "@/components/SelectInput";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/styles";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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
    <ScrollView contentContainerStyle={styles.container}>
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
    </ScrollView>
  );
}
