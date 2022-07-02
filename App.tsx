import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { styles } from "./styles";
import { Logo } from "./src/components/Logo";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Logo />
    </View>
  );
}
