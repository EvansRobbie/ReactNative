import React from "react";
import { View, Text } from "react-native";

const Greet = ({ greet }) => {
  return (
    <View>
      <Text style={{ color: "white" }}>Hello, {greet}</Text>
    </View>
  );
};

export default Greet;
