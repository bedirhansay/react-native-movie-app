import { merselImages } from '@/constant';
import { useLocalSearchParams } from 'expo-router';
import { View } from 'lucide-react-native';
import React from 'react';
import { ImageBackground, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './header';

export const CustomerDetail = () => {
  const { id } = useLocalSearchParams();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={merselImages.radialBg} style={{ flex: 1 }} resizeMode="cover">
        <SafeAreaView>
          <Header id={id as string} />

          <View className="flex-1 absolute top-64 left-0 right-0 bottom-0 bg-white rounded-t-3xl pt-6">
            <Text className="text-gray-800 text-lg font-bold px-4">Müşteri Detayları</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  );
};
