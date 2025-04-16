import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/styles";
import { View } from "react-native";
import { InputRow } from "@/components/InputRow";
import { ScrollView } from "react-native-gesture-handler";
import { Item } from "@/app/(tabs)";
import Button from "@/components/Button";

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
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title">Edit items</ThemedText>
      <ThemedText type="default">Make any corrections if necessary</ThemedText>

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
    </ScrollView>
  );
};

export default EditItems;
