import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import iconPng from "@assets/icon.png";

export function Logo() {
  return (
    <>
      <View style={styles.container}>
        <Image source={iconPng} />
        <Text style={styles.heading}>hanalyzer</Text>
      </View>
    </>
  );
}
