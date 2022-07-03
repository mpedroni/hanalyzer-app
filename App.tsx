import { AppRegistry, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "@screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "@screens/Main";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={Main} key="main" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("main", () => App);

if (Platform.OS === "web") {
  const rootTag =
    document.getElementById("root") || document.getElementById("X");
  AppRegistry.runApplication("X", { rootTag });
}
