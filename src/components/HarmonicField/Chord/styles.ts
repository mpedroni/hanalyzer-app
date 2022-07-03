import { colors } from "@colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 32,
    alignItems: "center",
  },
  degree: {
    fontFamily: "monospace",
    fontSize: 12,
    fontWeight: "bold",
    color: colors.background.gray[700],
    marginBottom: 16,
  },
  name: {
    fontSize: 16,
    color: colors.text.body,
    marginBottom: 8,
  },
  chord: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: 8,
    backgroundColor: colors.background.gray[700],
    height: 32,
    width: 32,
  },
  note: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text.body,
  },
});
