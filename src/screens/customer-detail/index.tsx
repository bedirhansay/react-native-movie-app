import FrostedButton from '@/components/buttons';
import { merselImages } from '@/constant';
import { useLocalSearchParams } from 'expo-router';
import { ArrowDownLeft, ArrowUpRight, Copy, Settings2, Star } from 'lucide-react-native';
import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './header';

export const CustomerDetail = () => {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <ImageBackground source={merselImages.radialBg} resizeMode="cover" style={{ paddingBottom: 50 }}>
          <SafeAreaView>
            <Header id={id as string} />

            <View className="px-4 py-3 flex-row">
              <View className="w-24 rounded-lg bg-white  items-center justify-center shadow-md">
                <Image source={merselImages.arkas} className="w-20 h-20" />
              </View>

              <View className="ml-2">
                <Text className="text-white text-lg font-semibold">Arkas Lojistik ve Taşımacılık A.Ş</Text>

                <View className="flex-row items-center gap-2">
                  <Text className="text-white text-sm mt-1 border border-[#FFFFFF] p-1 rounded-md">Gerçek Kişi</Text>
                  <View className="flex-row items-center gap-1 ">
                    <Text className="text-white text-sm mt-1">
                      <Star fill="white" size={16} color="white" stroke="white" className="!w-5 h-5" />
                    </Text>
                    <Text className="text-white text-sm mt-1">Vip Müşteri</Text>
                  </View>
                </View>
                <View className="flex-row gap-2">
                  <Text className="text-white text-sm mt-1 font-bold">TCKN:</Text>

                  <View className="flex-row items-center gap-1">
                    <Text className="text-white text-sm mt-1">12345678901</Text>
                    <Copy size={16} color="white" />
                  </View>
                </View>
              </View>
            </View>

            <View className="flex-row justify-between items-center gap-3 px-4 mt-4">
              <View className="flex-row flex-1 gap-3">
                <FrostedButton
                  title="Ödeme Ekle"
                  className="flex-1"
                  icon={<ArrowDownLeft size={18} color="white" />}
                  onPress={() => console.log('Ödeme Ekle')}
                />
                <FrostedButton
                  title="Tahsilat Ekle"
                  className="flex-1"
                  icon={<ArrowUpRight size={18} color="white" />}
                  onPress={() => console.log('Tahsilat Ekle')}
                />
              </View>

              <FrostedButton icon={<Settings2 size={18} color="white" />} onPress={() => console.log('Filtre')} />
            </View>
          </SafeAreaView>
        </ImageBackground>

        <View className="bg-white -mt-20 rounded-t-3xl px-4 pt-6 pb-20">
          <Text className="text-gray-800 text-lg font-bold mb-4">Son İşlemler</Text>

          {[1, 2, 3].map((_, index) => (
            <View key={index} className="mb-4 rounded-xl border border-gray-200 p-4 shadow-sm bg-white">
              <Text className="font-semibold text-gray-600">Fatura</Text>
              <Text className="text-gray-500 text-xs mt-1">20.02.2025 15:40</Text>
              <Text className="text-gray-700 mt-2">Bu alana yazacağınız açıklamalarınız bu şekilde gözükecektir</Text>
              <Text className="text-right mt-2 font-bold text-gray-800">1450,42₺</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
