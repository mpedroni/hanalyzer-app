import "react-native-gesture-handler";
import { AppRegistry, Platform, StatusBar, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Auth } from "@screens/Auth";
import { Home } from "@screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationDrawer } from "@components/NavigationDrawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={(props) => <NavigationDrawer {...props} />}
      >
        <Drawer.Screen name="Auth" component={Auth} />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("main", () => App);

if (Platform.OS === "web") {
  const rootTag =
    document.getElementById("root") || document.getElementById("X");
  AppRegistry.runApplication("X", { rootTag });
}
