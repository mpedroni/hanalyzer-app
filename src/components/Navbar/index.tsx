import { Image, TouchableOpacity, View } from "react-native";

import hamburgerMenuIcon from "@assets/icons/hamburger-menu.png";
import bellIcon from "@assets/icons/bell.png";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Navbar() {
  const navigation = useNavigation();

  function openDrawer() {
    // @ts-ignore
    navigation.openDrawer();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <Image source={hamburgerMenuIcon} />
      </TouchableOpacity>
      <Image source={bellIcon} />
    </View>
  );
}
