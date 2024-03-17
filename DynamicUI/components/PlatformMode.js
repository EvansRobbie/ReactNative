import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import CustomButton from "./CustomButton";

const PlatformMode = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
        <CustomButton title="Press Me" onPress={() => alert("Pressed!")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "red",
        fontSize: 24,
        fontStyle: "italic",
      },
    }),
    fontSize: 24,
    fontWeight: "bold",
  },
  //   box: {
  //     backgroundColor: "lightblue",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
});
export default PlatformMode;
