import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Note } from "types/harmonic-field";
import { styles } from "./styles";

const notes: { note: Note; label: string }[] = [
  { label: "b", note: "b" },
  { label: "natural", note: "natural" },
  { label: "#", note: "#" },
];

interface NotesSelectorProps {
  value: Note;
  onChange: (n: Note) => void;
}

export function NotesSelector({ onChange, value }: NotesSelectorProps) {
  return (
    <View style={styles.container}>
      {notes.map((note) => (
        <TouchableOpacity
          style={[
            styles.button,
            value === note.note && styles.button__selected,
          ]}
          key={note.note}
          onPress={() => onChange(note.note)}
        >
          <Text style={styles.label}>{note.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
