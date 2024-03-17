import React from "react";
import { View, StatusBar } from "react-native";

const Status = () => {
  return (
    <View>
      <StatusBar
        backgroundColor={"lightgreen"}
        barStyle="light-content"
        hidden
      />
    </View>
  );
};

export default Status;
