import { Chord } from "types/chord";
import { View } from "react-native";
import { Chord as ChordComponent } from "./Chord";
import { styles } from "./styles";

interface HarmonicFieldProps {
  harmonicField: Chord[];
}

export function HarmonicField({ harmonicField }: HarmonicFieldProps) {
  return (
    <View style={styles.container}>
      {harmonicField.map((chord) => (
        <ChordComponent key={chord.name} chord={chord} />
      ))}
    </View>
  );
}
