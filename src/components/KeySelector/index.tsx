import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RootKey } from "types/harmonic-field";
import { styles } from "./styles";

const keys: { label: string; value: RootKey }[] = [
  { label: "C", value: "C" },
  { label: "D", value: "D" },
  { label: "E", value: "E" },
  { label: "F", value: "F" },
  { label: "G", value: "G" },
  { label: "A", value: "A" },
  { label: "B", value: "B" },
];

interface KeySelectorProps {
  value: RootKey;
  onChange: (rk: RootKey) => void;
}

export function KeySelector({ value, onChange }: KeySelectorProps) {
  return (
    <View style={styles.container}>
      {keys.map((key) => (
        <TouchableOpacity
          key={key.value}
          style={[styles.key, key.value === value && styles.key__selected]}
          onPress={() => onChange(key.value)}
        >
          <Text
            style={[styles.label, key.value === value && styles.key__selected]}
          >
            {key.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
