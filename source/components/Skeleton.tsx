import { View, Animated, Easing, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import LinearGradient from "react-native-linear-gradient";

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

interface GSkeletonProps {
  width?: number;
  height?: number;
  style?: object;
}

const Skeleton = ({ width = 200, height = 200, style }: GSkeletonProps) => {

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <View
      style={{
        ...styles.container,
        width,
        height,
        backgroundColor: '#1c1e1f',
        ...style,
      }}
    >
      <AnimatedLG
        colors={[
            "rgba(255, 255, 255, 0)",
            "rgba(255, 255, 255, 0.4)",
            "rgba(255, 255, 255, 0)",
          ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          ...StyleSheet.absoluteFillObject,
          transform: [{ translateX: translateX }],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 4,
  },
});

export default Skeleton;
