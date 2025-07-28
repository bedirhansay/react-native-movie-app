// components/RadialGradientBackground.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

export const RadialGradientBackground = () => {
  return (
    <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
      <Defs>
        <RadialGradient
          id="grad"
          cx="54.35%"
          cy="72.07%"
          rx="158.31%"
          ry="98.74%"
          fx="54.35%"
          fy="72.07%"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#38275F" stopOpacity="1" />
          <Stop offset="1" stopColor="#432E73" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
    </Svg>
  );
};
