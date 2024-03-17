import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StylingRN = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.darkMode]}>
        <Text style={styles.darkModeText}>Style Inheritance</Text>
      </View>
      <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
        <Text>Lightblue Box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
        <Text>LightGreen Box</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white",
  },
  box: {
    paddingVertical: 10,
    width: 250,
    height: 250,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 10,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3.84,
  },
  androidShadow: {
    elevation: 5,
  },
});
export default StylingRN;
