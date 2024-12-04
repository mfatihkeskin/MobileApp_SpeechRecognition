import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Voice from "@react-native-voice/voice";
import ListeningModal from "../utilities/ListeningModal";

export default SpeechRecognition = ({ navigation }) => {
  const [isListening, setIsListening] = useState(false);
  const [lastCommand, setLastCommand] = useState("");

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResultsHandler;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResultsHandler = (speech) => {
    command = speech.value;
    console.log("command:", command[0]);
    setLastCommand(command);
    setIsListening(false);
  };

  const startListening = async () => {
    console.log("Listening...");
    try {
      await Voice.start("tr-TR");
      setIsListening(true);
      setTimeout(() => {
        setIsListening(false);
        Voice.stop();
        Voice.destroy().then(Voice.removeAllListeners);
      }, 10000);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <View style={styles.container}>
      {!isListening ? (
        <TouchableOpacity style = {styles.micContainer} onPress={startListening}>
          <Image
            source={require("../../assets/mic.png")}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
      ) : (
        <ListeningModal
          modalVisible={isListening}
          setModalVisible={setIsListening}
        />
      )}
      {lastCommand ? <Text style={styles.text}>{`Algılandı: ${lastCommand}`}</Text> : <></>}
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
  micContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    backgroundColor: "lightblue",
  },
  text: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
  },
});
