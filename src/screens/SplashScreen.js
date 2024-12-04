import React, { useEffect } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { RESULTS, PERMISSIONS, request } from "react-native-permissions";

export default SplashScreen = ({ navigation }) => {
  useEffect(() => {
    checkForMicrophonePermission();
  }, []);

  const checkForMicrophonePermission = async () => {
    console.log("Checking microphone permission...");
    const permission =
      Platform.OS === "android"
        ? PERMISSIONS.ANDROID.RECORD_AUDIO
        : PERMISSIONS.IOS.MICROPHONE;

    const status = await request(permission);
    if (status === RESULTS.GRANTED) {
      console.log("Microphone permission granted");
      navigation.navigate("speech_recognition_screen");
    } else {
      console.log("Microphone permission not granted, retrying...");
      await checkForMicrophonePermission();
    }
  };

  return (
    <View style={styles.container}>
      <Text> Mikrofon İzni Kontrol Ediliyor... </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});
