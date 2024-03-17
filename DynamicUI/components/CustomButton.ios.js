import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "lightblue",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
      }}
    >
      <Text style={{ color: "purple", fontSize: 18 }}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
