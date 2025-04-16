import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  label,
  onPress,
  variant = "primary",
}: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.button, styles[variant]]}>
      <Text style={[textStyles.text, textStyles[variant]]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 50,
    marginTop: 10,
  },
  primary: {
    backgroundColor: "#fff",
  },
  secondary: {
    borderColor: "#fff",
    borderWidth: 2,
  },
});

const textStyles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  primary: {
    color: "#000",
  },
  secondary: {
    color: "#fff",
  },
});
