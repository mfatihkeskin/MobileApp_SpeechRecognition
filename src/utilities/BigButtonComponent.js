import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const BigButtonComponent = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BigButtonComponent;

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 20,
    width: windowWidth * 0.75,
    height: windowHeight * 0.07,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "steelblue",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
