import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Logo() {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("./../../../assets/icon.png")} />
        <Text style={styles.heading}>hanalyzer</Text>
      </View>
    </>
  );
}
