import { BlurView } from 'expo-blur';
import React from 'react';
import { Platform, StyleSheet, View, ViewStyle } from 'react-native';

interface MDSBlurCardProps {
  children: React.ReactNode;
  intensity?: number;
  tint?: 'light' | 'dark' | 'default';
  style?: ViewStyle;
  backgroundColor?: string;
  borderRadius?: number;
  className?: string;
}

export const MDSBlurCard: React.FC<MDSBlurCardProps> = ({
  children,
  intensity = 60,
  tint = 'light',
  style,
  className,
  backgroundColor = 'rgba(255,255,255,0.15)',
  borderRadius = 16,
}) => {
  return (
    <View style={[{ borderRadius, overflow: 'hidden' }, style]} className={className}>
      <BlurView intensity={intensity} tint={tint} style={StyleSheet.absoluteFill} />

      {Platform.OS === 'android' && <View style={[StyleSheet.absoluteFillObject, { backgroundColor }]} />}

      {children}
    </View>
  );
};
