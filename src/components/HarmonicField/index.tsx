import { View } from "react-native";
import { Chord as TonalChord, Scale as TonalScale } from "@tonaljs/tonal";
import { Chord as ChordComponent } from "./Chord";
import { styles } from "./styles";
import { ChordStructure, Note, RootKey, Scale } from "types/harmonic-field";
import { Chord } from "types/chord";

interface HarmonicFieldProps {
  note: Note;
  structure: ChordStructure;
  scale: Scale;
  rootKey?: RootKey;
}

function numberToGreekNumbers(n: number) {
  const numbers: { [n: number]: string } = {
    1: "I",
    2: "II",
    3: "IV",
    4: "V",
    5: "VI",
    6: "VII",
    7: "VIII",
  };

  return numbers[n];
}

export function HarmonicField({
  note,
  scale,
  structure,
  rootKey,
}: HarmonicFieldProps) {
  function getHarmonicField() {
    const scaleNotes: string[] = TonalScale.get(
      `${rootKey}${note === "natural" ? "" : note} ${scale}`
    ).notes;

    const chords: Chord[] = [];

    scaleNotes.forEach((_, scaleNote) => {
      let chordNotes: string[] = [];
      const notesPerChords = structure === "tetrad" ? 4 : 3;

      for (let i = 0; i < notesPerChords * 2; i += 2) {
        chordNotes.push(scaleNotes[(i + scaleNote) % scaleNotes.length]);
      }

      const chord = TonalChord.detect(chordNotes)[0];
      const parsedChord: Chord = {
        name: TonalChord.get(chord).symbol,
        degree: numberToGreekNumbers(scaleNote + 1),
        notes: chordNotes,
      };
      chords.push(parsedChord);

      chordNotes = [];
    });

    return chords;
  }

  const harmonicField: Chord[] = getHarmonicField();

  return (
    <View style={styles.container}>
      {harmonicField.map((chord) => (
        <ChordComponent key={chord.name} chord={chord} />
      ))}
    </View>
  );
}
