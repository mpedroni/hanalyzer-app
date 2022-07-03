import { colors } from "@colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 4,
    overflow: "hidden",
  },
  button: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background.gray[800],
    height: 56,
  },
  button__selected: {
    backgroundColor: colors.background.gray[700],
  },
  label: {
    color: colors.text.body,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
