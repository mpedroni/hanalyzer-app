import { colors } from "@colors";
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.gray[800],
    paddingTop: getStatusBarHeight() + 48,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.background.gray[700],
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text.heading,
  },
  email: {
    fontSize: 12,
    color: colors.text.body,
    marginBottom: 32,
  },
  routes: {},
  navItem: {
    justifyContent: "center",
    height: 40,
    borderRadius: 4,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  active: {
    backgroundColor: colors.background.gray[700],
  },
  route: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.text.body,
  },
  logoutBtn: {
    alignSelf: "flex-end",
    marginTop: "auto",
    marginBottom: 16,
  },
  logoutLabel: {
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontWeight: "500",
    fontSize: 14,
    color: colors.text.body,
  },
});
