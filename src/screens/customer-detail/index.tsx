import TabButtonGroup from '@/components/ButtonGroup';
import FrostedButton from '@/components/buttons';
import { merselImages } from '@/constant';
import { useLocalSearchParams } from 'expo-router';
import { ArrowDownLeft, ArrowUpRight, Copy, FilterIcon, Settings2, Star } from 'lucide-react-native';
import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Filter } from 'react-native-svg';
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
          <TabButtonGroup
            tabs={[
              { key: 'recent', label: 'Son İşlemler' },
              { key: 'files', label: 'Dosyalar' },
              { key: 'notes', label: 'Notlar' },
            ]}
            initialTabKey="recent"
            onTabChange={(key) => {
              console.log('Seçilen tab:', key);
            }}
          />
          <View className="mt-4 flex-row  items-center justify-between my-4  rounded-lg">
            <Text className="text-gray-800 text-lg font-bold">Son İşlemler</Text>
            <FrostedButton className="border border-[#D5D7DA]" icon={<Filter />}>
              <View className="flex-row items-center gap-1">
                <Text>
                  <FilterIcon size={16} className="text-gray-800" />
                </Text>
                <Text className="text-gray-800 font-semibold ">Filtrele</Text>
              </View>
            </FrostedButton>
          </View>

          {[1, 2, 3].map((_, index) => (
            <View key={index} className="mb-4 rounded-xl  border border-[#E9EAEB] r0 p-4 bg-white shadow-xs">
              <View className="flex-row justify-between items-start">
                <View className="  flex-wrap ">
                  <View className=" flex-row items-center border gap-2 border-[#E9EAEB] p-1 rounded-md">
                    <Text className="text-xs border border-[#E9EAEB] p-1 rounded-md text-gray-700">Fatura</Text>
                    <Text className="text-xs font-semibold  text-gray-700  rounded-md">142124124122</Text>

                    <Text className="text-xs font-semibold ">
                      <Copy size={16} color="gray" />
                    </Text>
                  </View>
                  <Text className="text-xs text-gray-500 pb-2 mt-1 ">20.02.2025 15:40</Text>
                </View>

                <View className="items-end">
                  <Text className="text-xs text-gray-400">Tutar</Text>
                  <Text className="font-bold text-lg text-gray-900">1450,42₺</Text>
                </View>
              </View>

              <Text className="text-sm text-gray-700 mt-2">
                Bu alana yazacağınız açıklamalarınız bu şekilde gözükecektir
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
