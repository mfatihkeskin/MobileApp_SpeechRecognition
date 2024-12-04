import React from "react";
import { Modal, View, Text, StyleSheet, Dimensions } from "react-native";
import { PulseIndicator } from "react-native-indicators";
import BigButtonComponent from "./BigButtonComponent";

const ListeningModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            {"Dinleniyor..."}
          </Text>
          <PulseIndicator color="#007BFF" />
          <BigButtonComponent
            text={"İPTAL"}
            onPress={() => setModalVisible(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: windowWidth * 0.8,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default ListeningModal;
