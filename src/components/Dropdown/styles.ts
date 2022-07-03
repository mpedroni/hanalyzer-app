import { colors } from "@colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.background.gray[800],
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 12,
    letterSpacing: 0.4,
    color: colors.primary,
    top: 0,
  },
  selected: {
    color: colors.text.body,
    fontSize: 16,
    letterSpacing: 0.15,
    lineHeight: 24,
  },
});
