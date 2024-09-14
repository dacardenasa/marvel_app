import React from "react";
import { Modal, Pressable, StyleSheet } from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { Box } from "@/components";

type ComicModalProps = {
  source: string;
  isVisible: boolean;
  closeModal: () => void;
};

const _ComicModal = ({ source, isVisible, closeModal }: ComicModalProps) => {
  return (
    <Modal
      animationType="slide"
      onRequestClose={closeModal}
      style={StyleSheet.absoluteFillObject}
      visible={isVisible}
      transparent
    >
      <Pressable style={styles.closeButtonBox} onPress={closeModal}>
        <MaterialIcons name="close" color="#fff" size={36} />
      </Pressable>
      <Box style={styles.backdropBox}>
        <Image
          source={source}
          placeholder={source}
          contentFit="scale-down"
          transition={1000}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Modal>
  );
};

export default React.memo(_ComicModal);

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
  },
  backdropBox: {
    backgroundColor: "rgba(0, 0, 0, .8)",
    justifyContent: "center",
    alignItems: "center"
  }
});
