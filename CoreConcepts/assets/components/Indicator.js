import React from "react";
import { View, ActivityIndicator } from "react-native";

const Indicator = () => {
  return (
    <View>
      {/* small:default, animating:true- default */}
      <ActivityIndicator size="large" color="midnightblue" animating={true} />
      <ActivityIndicator />
    </View>
  );
};

export default Indicator;
