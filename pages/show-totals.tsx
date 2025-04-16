import { Item } from "@/app/(tabs)";
import Button from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/styles";
import { View } from "react-native";

type ShowTotalsProps = {
  people: string[];
  items: Item[];
  onNext: () => void;
};

export default function ShowTotals({ people, items, onNext }: ShowTotalsProps) {
  const totals = people.map((person) => ({
    name: person,
    total: 0,
  }));

  for (const item of items) {
    const itemCost = parseFloat(item.cost);
    const person = item.name;
    const personIndex = totals.findIndex((p) => p.name === person);
    if (personIndex !== -1) {
      totals[personIndex].total += itemCost;
    }
  }

  const totalSum = totals.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <View style={styles.container}>
      <ThemedText type="title">Totals</ThemedText>
      <ThemedText type="default">Here are the totals for the group:</ThemedText>

      {totals.map((total, index) => (
        <ThemedText key={index} type="default">
          {total.name} owes £{total.total.toFixed(2)}
        </ThemedText>
      ))}

      <ThemedText type="default">Total sum: £{totalSum.toFixed(2)}</ThemedText>

      <Button label="Start again" onPress={onNext} />
    </View>
  );
}
