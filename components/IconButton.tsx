import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

type IconButtonProps = {
  name: "plus" | "minus";
  onPress: () => void;
};

export default function IconButton({ name, onPress }: IconButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconButton}>
      <FontAwesome name={name} size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    padding: 10,
  },
});
