import { fakeCustomers } from '@/constant/fake-customers';
import { formatCurrency } from '@/lib/format-currency';
import clsx from 'clsx';
import { BlurView } from 'expo-blur';
import React, { useRef } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
const { width: screenWidth } = Dimensions.get('window');

export default function FavCustomer() {
  const carouselRef = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const handleDotPress = (index: number) => {
    carouselRef.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View>
      <Carousel
        ref={carouselRef}
        loop
        width={screenWidth}
        autoPlay={false}
        height={86}
        data={fakeCustomers}
        pagingEnabled
        style={{ paddingLeft: screenWidth * 0.05 }}
        onProgressChange={progress}
        scrollAnimationDuration={700}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: 100,
          parallaxScrollingScale: 1,
        }}
        renderItem={({ item }) => (
          <BlurView className="flex-1 rounded-2xl  overflow-hidden w-[320px] ">
            <View className="flex-row items-center justify-between bg-white mx-4 my-2 p-4 rounded-xl shadow-sm">
              <View
                className="h-12 w-12 rounded-full items-center justify-center"
                style={{ backgroundColor: item.logoColor }}
              >
                <Text className="text-white font-bold">{item.name.charAt(0)}</Text>
              </View>

              <View className="flex-1 mx-4">
                <Text className="font-semibold text-gray-800" numberOfLines={1}>
                  {item.name}
                </Text>
                <Text className="text-xs text-gray-500">{item.taxNumber}</Text>
              </View>

              <View className="items-end">
                <Text className="text-xs text-gray-400">Bakiye</Text>
                <Text className={clsx('font-bold', 'text-gray-800')}>{formatCurrency(item.balance)}</Text>
              </View>
            </View>
          </BlurView>
        )}
      />
    </View>
  );
}
