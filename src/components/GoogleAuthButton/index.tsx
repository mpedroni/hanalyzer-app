import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import googleIcon from "@assets/googleIcon.png";

interface GoogleAuthButtonProps {
  onAuth: () => void;
}

export function GoogleAuthButton({ onAuth }: GoogleAuthButtonProps) {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onAuth}>
        <Image source={googleIcon} />
        <Text style={styles.label}>Entrar com o Google</Text>
      </TouchableOpacity>
    </>
  );
}
