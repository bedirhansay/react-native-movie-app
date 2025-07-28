import { fakeSummaryCards } from '@/constant/fake-corousel';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { EyeOff } from 'lucide-react-native';
import React, { useRef } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
const { width: screenWidth } = Dimensions.get('window');

export default function CarouselSection() {
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
        height={190}
        autoPlay={false}
        data={fakeSummaryCards}
        pagingEnabled
        style={{ marginTop: 16, paddingLeft: screenWidth * 0.05 }}
        onProgressChange={progress}
        scrollAnimationDuration={700}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: 100,
          parallaxScrollingScale: 1,
        }}
        renderItem={({ item }) => (
          <BlurView className="flex-1 rounded-2xl  overflow-hidden w-[320px] ">
            <LinearGradient
              colors={['#8E2DE2', '#4A00E0']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ flex: 1, opacity: 0.92, padding: 16 }}
            >
              <View className="flex-1 justify-between ">
                <View className="flex-row justify-between items-start">
                  <View>
                    <Text className="text-white font-bold text-base">{item.title}</Text>
                    <View className="mt-1">
                      <Text className="text-white text-xs bg-white/20 px-2 py-0.5 rounded">{item.currency}</Text>
                    </View>
                  </View>

                  <View className="bg-white/10 p-2 rounded-xl">
                    <EyeOff color="white" size={18} />
                  </View>
                </View>

                <View>
                  <Text className="text-white font-extrabold text-2xl">
                    {item.amount.toLocaleString('tr-TR', {
                      style: 'currency',
                      currency: item.currency,
                      maximumFractionDigits: 0,
                    })}
                  </Text>
                  <Text className="text-white text-sm mt-1">{item.period}</Text>
                </View>
              </View>
            </LinearGradient>
          </BlurView>
        )}
      />

      <Pagination.Custom
        progress={progress}
        data={fakeSummaryCards}
        size={10}
        containerStyle={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 12,
          gap: 6,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: '#D1D5DB',
        }}
        activeDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: '#8E2DE2',
        }}
        onPress={handleDotPress}
      />
    </View>
  );
}
