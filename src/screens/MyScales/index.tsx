import { Navbar } from "@components/Navbar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import removeIcon from "@assets/icons/remove.png";
import { useEffect, useState } from "react";
import {
  deleteHarmonicField,
  getHarmonicField,
} from "../../../src/firebase/app";

export function MyScales() {
  const [harmonicFields, setHarmonicFields] = useState<any[][]>([]);

  useEffect(() => {
    getHarmonicField("matheus").then((hf) => {
      if (!hf) return;
      setHarmonicFields(Object.entries(hf));
    });
  }, []);

  async function delHarmonicField(name: string) {
    await deleteHarmonicField(name);
    getHarmonicField("matheus").then((hf) => {
      if (!hf) return;
      setHarmonicFields(Object.entries(hf));
    });
  }

  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.heading}>Minhas Escalas</Text>

      <View style={styles.scales}>
        {harmonicFields.map(([name, hf]) => (
          <View key={name} style={styles.scale}>
            <Text style={styles.scaleName}>{name}</Text>
            <TouchableOpacity onPress={() => delHarmonicField(name)}>
              <Image source={removeIcon} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
