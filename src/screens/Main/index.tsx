import { Dropdown } from "@components/Dropdown";
import { HarmonicField } from "@components/HarmonicField";
import { KeySelector } from "@components/KeySelector";
import { Navbar } from "@components/Navbar";
import { NotesSelector } from "@components/NotesSelector";
import { View } from "react-native";
import { styles } from "./styles";
import { Chord } from "types/chord";

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

export function Main() {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.form}>
        <NotesSelector />
        <View
          style={{
            marginTop: 16,
          }}
        >
          <Dropdown data={structures} label="Estrutura de acordes" />
        </View>

        <View
          style={{
            marginTop: 16,
          }}
        >
          <Dropdown data={scales} label="Escala" />
        </View>

        <View
          style={{
            marginTop: 16,
          }}
        >
          <KeySelector />
        </View>
      </View>

      <View
        style={{
          marginTop: 32,
        }}
      >
        <HarmonicField harmonicField={harmonicField} />
      </View>
    </View>
  );
}
