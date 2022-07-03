import { colors } from "@colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.gray[900],
  },
  heading: {
    paddingVertical: 24,
    paddingHorizontal: 8,
    color: colors.text.heading,
    fontSize: 24,
    fontWeight: "bold",
  },
  scales: {
    paddingHorizontal: 8,
  },
  scale: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    backgroundColor: colors.background.gray[800],
    padding: 16,
    borderRadius: 4,
  },
  scaleName: {
    color: colors.text.body,
    fontSize: 16,
  },
});
