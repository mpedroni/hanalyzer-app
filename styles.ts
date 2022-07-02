import { StyleSheet } from "react-native";
import { colors } from "./src/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background.gray[900],
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  description: {
    flex: 1,
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: colors.text.body,
    maxWidth: 243,
  },
});
