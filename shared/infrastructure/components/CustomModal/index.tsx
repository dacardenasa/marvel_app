import React from "react";
import { Modal, Platform, Pressable, StyleSheet } from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type CustomModalProps = {
  children: React.ReactNode;
  isVisible: boolean;
  closeModal: () => void;
};

const _CustomModal = ({
  children,
  isVisible,
  closeModal
}: CustomModalProps) => {
  return (
    <Modal
      animationType="slide"
      onRequestClose={closeModal}
      style={StyleSheet.absoluteFillObject}
      visible={isVisible}
      transparent
    >
      <Pressable
        style={{
          ...styles.closeButtonBox,
          ...(Platform.OS === "ios" ? { top: 36 } : {})
        }}
        onPress={closeModal}
      >
        <MaterialIcons name="close" color="#fff" size={36} />
      </Pressable>
      {children}
    </Modal>
  );
};

export const CustomModal = React.memo(_CustomModal);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
  closeButtonBox: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 100
  }
});
