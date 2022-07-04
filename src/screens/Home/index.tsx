import { Dropdown } from "@components/Dropdown";
import { ChordStructure, Note, RootKey, Scale } from "types/harmonic-field";
import { KeySelector } from "@components/KeySelector";
import { Navbar } from "@components/Navbar";
import { NotesSelector } from "@components/NotesSelector";
import { View } from "react-native";
import { styles } from "./styles";
import { Chord } from "types/chord";

import { useState } from "react";
import { HarmonicField } from "@components/HarmonicField";

const structures = [
  { value: "triad", label: "Tríades" },
  { value: "tetrad", label: "Tétrades" },
];

const scales = [
  { value: "major", label: "Maior" },
  { value: "minor", label: "Menor" },
];

const harmonicField: Chord[] = [
  {
    name: "C",
    degree: "I",
    notes: ["C", "E", "G", "B"],
  },
  {
    name: "Dm",
    degree: "II",
    notes: ["D", "F", "A", "C"],
  },
  {
    name: "Em",
    degree: "III",
    notes: ["E", "G", "B", "D"],
  },
  {
    name: "F",
    degree: "IV",
    notes: ["F", "A", "C", "E"],
  },
  {
    name: "G",
    degree: "V",
    notes: ["G", "B", "D", "F"],
  },
  {
    name: "Am",
    degree: "VI",
    notes: ["A", "C", "E", "G"],
  },
  {
    name: "Bø",
    degree: "III",
    notes: ["B", "D", "F", "A"],
  },
];

export function Home() {
  const [note, setNote] = useState<Note>("natural");
  const [structure, setStructure] = useState<ChordStructure>("triad");
  const [scale, setScale] = useState<Scale>("major");
  const [rootKey, setRootKey] = useState<RootKey>("" as RootKey);

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.form}>
        <NotesSelector value={note} onChange={(note) => setNote(note)} />
        <View
          style={{
            marginTop: 16,
          }}
        >
          <Dropdown
            data={structures}
            onChange={(s) => setStructure(s)}
            value={structure}
            label="Estrutura de acordes"
          />
        </View>

        <View
          style={{
            marginTop: 16,
          }}
        >
          <Dropdown
            data={scales}
            label="Escala"
            onChange={(s) => setScale(s)}
            value={scale}
          />
        </View>

        <View
          style={{
            marginTop: 16,
          }}
        >
          <KeySelector value={rootKey} onChange={(k) => setRootKey(k)} />
        </View>
      </View>

      <View
        style={{
          marginTop: 32,
        }}
      >
        <HarmonicField
          note={note}
          scale={scale}
          structure={structure}
          rootKey={rootKey}
        />
      </View>
    </View>
  );
}
