import { useState } from "react";
import { Text, View } from "react-native";
import { Dropdown as ReactNativeElementDropdown } from "react-native-element-dropdown";
import { styles } from "./styles";

interface DropdownProps {
  label: string;
  data: { label: string; value: any }[];
  value: any;
  onChange: (v: any) => void;
}

export function Dropdown({ label, data, value, onChange }: DropdownProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <ReactNativeElementDropdown
        data={data}
        containerStyle={{
          marginTop: -16,
          marginHorizontal: -16,
          width: "96%",
        }}
        selectedTextStyle={styles.selected}
        labelField="label"
        valueField="value"
        placeholder={""}
        value={value}
        onChange={(item) => {
          onChange(item.value);
        }}
      />
    </View>
  );
}
