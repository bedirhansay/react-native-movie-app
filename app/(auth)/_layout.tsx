import { RadialGradientBackground } from '@/components/radial-gradient';
import { merselImages } from '@/lib/constant';
import { Slot } from 'expo-router';
import React from 'react';
import { Dimensions, Image, KeyboardAvoidingView, Platform, View } from 'react-native';

export default function AuthLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <RadialGradientBackground />

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
