import { Image, View } from "react-native";

import hamburgerMenuIcon from "@assets/icons/hamburger-menu.png";
import bellIcon from "@assets/icons/bell.png";
import { styles } from "./styles";

export function Navbar() {
  return (
    <View style={styles.container}>
      <Image source={hamburgerMenuIcon} />
      <Image source={bellIcon} />
    </View>
  );
}
