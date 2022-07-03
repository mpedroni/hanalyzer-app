import { Image, Text, TouchableOpacity, View } from "react-native";
import { Chord as ChordType } from "types/chord";
import arrowDownIcon from "@assets/icons/arrow-down.png";
import { styles } from "./styles";

interface ChordProps {
  chord: ChordType;
}

export function Chord({ chord }: ChordProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.degree}>{chord.degree}</Text>
      <Text style={styles.name}>{chord.name}</Text>
      <Image source={arrowDownIcon} />
      {chord.notes.map((note) => (
        <TouchableOpacity key={note} style={styles.chord}>
          <Text style={styles.note}>{note}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
