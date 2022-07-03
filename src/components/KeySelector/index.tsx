import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const keys = [
  { label: "C", value: "C" },
  { label: "D", value: "D" },
  { label: "E", value: "E" },
  { label: "F", value: "F" },
  { label: "G", value: "G" },
  { label: "A", value: "A" },
  { label: "B", value: "B" },
];

export function KeySelector() {
  const [selected, setSelected] = useState("");

  return (
    <View style={styles.container}>
      {keys.map((key) => (
        <TouchableOpacity
          key={key.value}
          style={[styles.key, key.value === selected && styles.key__selected]}
          onPress={() => setSelected(key.value)}
        >
          <Text
            style={[
              styles.label,
              key.value === selected && styles.key__selected,
            ]}
          >
            {key.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
