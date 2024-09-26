import React from "react";
import { StyleSheet } from "react-native";

import { Image } from "expo-image";
import { Box, CustomModal } from "@/shared/infrastructure/components";

type ComicModalProps = {
  source: string;
  isVisible: boolean;
  closeModal: () => void;
};

const _ComicModal = ({ source, isVisible, closeModal }: ComicModalProps) => {
  return (
    <CustomModal closeModal={closeModal} isVisible={isVisible}>
      <Box style={styles.backdropBox}>
        <Image
          source={source}
          placeholder={source}
          contentFit="scale-down"
          transition={1000}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </CustomModal>
  );
};

export default React.memo(_ComicModal);

const styles = StyleSheet.create({
  backdropBox: {
    backgroundColor: "rgba(0, 0, 0, .8)",
    justifyContent: "center",
    alignItems: "center"
  }
});
