import { Navbar } from "@components/Navbar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import removeIcon from "@assets/icons/remove.png";

const scales = [
  {
    name: "C major",
  },
  {
    name: "D major",
  },
  {
    name: "C minor",
  },
];

export function MyScales() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.heading}>Minhas Escalas</Text>

      <View style={styles.scales}>
        {scales.map((scale) => (
          <View key={scale.name} style={styles.scale}>
            <Text style={styles.scaleName}>{scale.name}</Text>
            <TouchableOpacity>
              <Image source={removeIcon} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
