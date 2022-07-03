import { Dropdown } from "@components/Dropdown";
import { KeySelector } from "@components/KeySelector";
import { Navbar } from "@components/Navbar";
import { NotesSelector } from "@components/NotesSelector";
import { View } from "react-native";
import { styles } from "./styles";

const structures = [
  { value: "triad", label: "Tríades" },
  { value: "tetrad", label: "Tétrades" },
];

const scales = [
  { value: "major", label: "Maior" },
  { value: "minor", label: "Menor" },
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
    </View>
  );
}
