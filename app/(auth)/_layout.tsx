import { merselImages } from '@/constant';
import { Slot } from 'expo-router';
import React from 'react';
import { Dimensions, Image, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

const RadialBackground = () => (
  <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
    <Defs>
      <RadialGradient
        id="grad"
        cx="59.87%"
        cy="76.24%"
        rx="117.81%"
        ry="96.94%"
        fx="59.87%"
        fy="76.24%"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#38275F" stopOpacity="1" />
        <Stop offset="1" stopColor="rgba(67, 46, 115, 0)" stopOpacity="0" />
      </RadialGradient>
    </Defs>
    <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
  </Svg>
);

export default function AuthLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <RadialBackground />

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={{ flex: 1 }}>
          <View className="w-full relative" style={{ height: Dimensions.get('screen').height / 2.25 }}>
            <Image source={merselImages.backgroundImages} className="self-center  absolute -bottom-48 z-10" />
            <Image source={merselImages.logo} className="self-center  absolute -bottom-16 z-10" />
          </View>

          <Slot screenOptions={{ headerShown: false }} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
