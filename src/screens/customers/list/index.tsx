import { merselImages } from '@/lib/constant';
import React from 'react';
import { ImageBackground, ScrollView, StatusBar } from 'react-native';
import Header from './components/header';

export const CustomersScreen = () => {
  return (
    <ScrollView>
      <ImageBackground source={merselImages.radialBg} className="flex-1" resizeMode="cover">
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <Header />
      </ImageBackground>
    </ScrollView>
  );
};
