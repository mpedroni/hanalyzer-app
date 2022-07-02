import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.primary,
    letterSpacing: 5,
    marginLeft: 16,
  },
});
