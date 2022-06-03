import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import MyStyle from "../constants/defaultStyles";

const customIconButton = ({ onTap, name, color, backgroundColor }) => {
  // console.log(onPress, name, color, backgroundColor);
  return (
    <TouchableOpacity style={[styles.iconContainer, {backgroundColor: backgroundColor}]} onPress={onTap}>
        <Ionicons name={name} color={color} size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 5,
    padding: 3,
  },
});

export default customIconButton;
