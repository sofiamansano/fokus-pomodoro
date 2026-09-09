import { Pressable, Text, StyleSheet } from "react-native";

interface ActiveButtonProps {
  active: boolean;
  onPress: () => void;
  display: string;
}

export function ActionButton({ active, onPress, display }: ActiveButtonProps) {
  return (
    <Pressable
      style={[styles.contextButton, active && styles.contextButtonActive]}
      onPress={onPress}
    >
      <Text style={styles.contextButtonText}>{display}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contextButton: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  contextButtonActive: {
    backgroundColor: "#144480",
  },
  contextButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});