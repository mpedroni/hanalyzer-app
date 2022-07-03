import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Logo } from "@components/Logo";
import { GoogleAuthButton } from "@components/GoogleAuthButton";
import type { Screen } from "src/types/screen";

type HomeProps = Screen<"Home">;

export const Home = ({ navigation }: HomeProps) => {
  function navigate() {
    navigation.navigate("Main");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Logo />
      <Text style={styles.description}>
        Entre com sua conta do Google para começar a estudar campos harmônicos.
      </Text>
      <GoogleAuthButton onAuth={navigate} />
    </View>
  );
};
