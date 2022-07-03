import "react-native-gesture-handler";
import { AppRegistry, Platform, StatusBar, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "@screens/Home";
import { Main } from "@screens/Main";
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
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Main" component={Main} />
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
