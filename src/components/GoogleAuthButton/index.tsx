import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import googleIcon from "@assets/googleIcon.png";

export function GoogleAuthButton() {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Image source={googleIcon} />
        <Text style={styles.label}>Entrar com o Google</Text>
      </TouchableOpacity>
    </>
  );
}
