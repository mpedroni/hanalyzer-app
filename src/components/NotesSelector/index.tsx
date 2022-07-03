import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Note = "b" | "natural" | "#";
const notes: { note: Note; label: string }[] = [
  { label: "b", note: "b" },
  { label: "natural", note: "natural" },
  { label: "#", note: "#" },
];

export function NotesSelector() {
  const [selected, setSelected] = useState<Note>("natural");

  return (
    <View style={styles.container}>
      {notes.map((note) => (
        <TouchableOpacity
          style={[
            styles.button,
            selected === note.note && styles.button__selected,
          ]}
          key={note.note}
          onPress={() => setSelected(note.note)}
        >
          <Text style={styles.label}>{note.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
