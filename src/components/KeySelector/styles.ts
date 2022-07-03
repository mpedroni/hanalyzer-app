import { colors } from "@colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  key: {
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    width: 40,
    backgroundColor: colors.background.gray[800],
    borderRadius: 4,
  },
  key__selected: {
    backgroundColor: colors.primary,
  },
  label: {
    fontSize: 16,
    letterSpacing: 0.15,
    color: colors.text.body,
  },
  label__selected: {
    fontWeight: "bold",
  },
});
