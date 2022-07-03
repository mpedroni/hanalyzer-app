import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import bellIcon from "@assets/icons/bell.png";

const screens = [
  { name: "Home", label: "Home" },
  { name: "MyScales", label: "Minhas escalas" },
];

export function NavigationDrawer({
  navigation,
  state,
}: DrawerContentComponentProps) {
  const activeRouteName = state.routes[state.index].name;

  function navigate(screen: string) {
    if (activeRouteName === screen) return;

    navigation.navigate(screen);
  }

  return (
    <View style={styles.container}>
      <Image source={bellIcon} style={styles.avatar} />
      <Text style={styles.name}>Matheus Pedroni</Text>
      <Text style={styles.email}>mpedroni77@gmail.com</Text>

      <View style={styles.routes}>
        {screens.map((screen) => (
          <TouchableOpacity
            key={screen.name}
            style={[
              styles.navItem,
              screen.name === activeRouteName && styles.active,
            ]}
            onPress={() => navigate(screen.name)}
          >
            <Text style={styles.route}>{screen.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => navigate("Auth")}
      >
        <Text style={styles.logoutLabel}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
