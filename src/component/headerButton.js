import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// import Color from "../constants/color";

const customHeaderButton = (props) => {
  return (
    <TouchableOpacity style={styles.btn} {...props} onPress={props.onPress}>
      <Ionicons name={props.iconName} size={30} color={props.color}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    margin: 2,
    marginRight: 10,
  },
});

export default customHeaderButton;
