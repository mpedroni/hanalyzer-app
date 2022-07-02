import { StyleSheet } from "react-native";
import { colors } from "@colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background.gray[700],
    padding: 16,
    borderRadius: 4,
  },
  label: {
    textTransform: "uppercase",
    marginLeft: 16,
    fontSize: 14,
    fontWeight: "bold",
    color: colors.text.heading,
    letterSpacing: 1,
  },
});
