import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Logo } from "./src/components/Logo";
import { GoogleAuthButton } from "./src/components/GoogleAuthButton";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Logo />
      <Text style={styles.description}>
        Entre com sua conta do Google para começar a estudar campos harmônicos.
      </Text>
      <GoogleAuthButton />
    </View>
  );
}
