import { images } from '@/constant';
import { fakeCustomers } from '@/constant/fake-customers';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';
import React, { useRef } from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
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
        height={80}
        data={fakeCustomers}
        pagingEnabled
        style={{ paddingLeft: screenWidth * 0.05 }}
        onProgressChange={progress}
        scrollAnimationDuration={700}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: 160,
          parallaxScrollingScale: 1,
        }}
        renderItem={({ item }) => (
          <Pressable className="flex-1 " onPress={() => router.push(`/customers/${item.id}`)}>
            <BlurView className="flex-1 rounded-2xl  p-3  overflow-hidden w-[250px] ">
              <View className="flex-row items-center justify-between bg-white p-3  rounded-md shadow-sm">
                <View className="h-10 w-10 rounded-full items-center justify-center">
                  <Image source={images.customerIcon} />
                </View>

                <View className="flex-1 mx-4">
                  <Text className="font-semibold text-xs text-gray-800" numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text className="text-xs text-gray-500">{item.taxNumber}</Text>
                </View>
              </View>
            </BlurView>
          </Pressable>
        )}
      />
    </View>
  );
}
