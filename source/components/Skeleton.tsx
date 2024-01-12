import { View, Animated, Easing, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

const StyledSkeleton = styled.View`
  background-color: #E1E9EE;
  height: 150px;
  border-radius: 4px;
`;
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
    <StyledSkeleton
      style={{
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
    </StyledSkeleton>
  );
};

export default Skeleton;
