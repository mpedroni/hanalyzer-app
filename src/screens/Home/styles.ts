import { StyleSheet } from "react-native";
import { colors } from "@colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.gray[900],
  },
  form: {
    padding: 8,
  },
  saveBtn: {
    marginTop: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background.gray[700],
    padding: 16,
  },
  saveBtnLabel: {
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "bold",
    color: colors.text.heading,
    letterSpacing: 1,
  },
});
