import { StyleSheet } from "react-native";
import { colors } from "@colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.background.gray[800],
    paddingTop: getStatusBarHeight() + 8,
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
});
