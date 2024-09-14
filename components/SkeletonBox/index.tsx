import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View, ViewStyle } from "react-native";

type SkeletonBoxProps = ViewStyle;

export const SkeletonBox = (props: SkeletonBoxProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.9,
          duration: 400,
          useNativeDriver: true,
          easing: Easing.linear
        })
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.fadingContainer,
        props,
        {
          opacity: fadeAnim
        }
      ]}
    />
  );
};

const styles = StyleSheet.create({
  fadingContainer: {
    backgroundColor: "#CCC"
  }
});
