import { fakeSummaryCards } from '@/constant/fake-corousel';
import { LinearGradient } from 'expo-linear-gradient';
import { EyeIcon, EyeOff } from 'lucide-react-native';
import React, { useRef } from 'react';
import { Dimensions, Platform, Pressable, Text, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import Svg, { Path } from 'react-native-svg';
import { MDSBlurCard } from './BlurView';
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

  const MiniLineChart = () => {
    const path = 'M0 20 C 50 10, 150 30, 268 15';

    return (
      <Svg width={268} height={30}>
        <Path d={path} stroke="#FB923C" strokeWidth={3} fill="none" />
      </Svg>
    );
  };
  const [open, setOpen] = React.useState(false);

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
          parallaxScrollingOffset: Platform.OS === 'ios' ? screenWidth * 0.15 : screenWidth * 0.2,
          parallaxScrollingScale: 1,
        }}
        renderItem={({ item }) => (
          <MDSBlurCard
            style={{
              width: screenWidth * 0.8,
            }}
            className="flex-1 rounded-2xl  overflow-hidden"
          >
            <LinearGradient
              colors={['rgba(67, 0, 177, 0.80)', 'rgba(165, 49, 220, 0.80)']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={{
                flex: 1,
                padding: 16,
                borderRadius: 12,
                opacity: 0.75,
              }}
            >
              <View className="flex-1 justify-between">
                <View className="flex-row justify-between items-start">
                  <View className="flex flex-row gap-4">
                    <Text className="text-white font-bold text-base">{item.title}</Text>
                    <View className="mt-1">
                      <Text className="text-white text-xs bg-white/20 px-2 py-0.5 rounded">{item.currency}</Text>
                    </View>
                  </View>
                </View>

                <View className="flex flex-row justify-between items-center ">
                  <View>
                    <Text className="text-white font-extrabold text-2xl">
                      {open
                        ? '*******'
                        : item.amount.toLocaleString('tr-TR', {
                            style: 'currency',
                            currency: item.currency,
                            maximumFractionDigits: 0,
                          })}
                    </Text>
                    <Text className="text-white text-sm mt-1">{item.period}</Text>
                  </View>

                  <Pressable onPress={() => setOpen(!open)} className="bg-white/10 p-2 rounded-xl">
                    {open ? <EyeOff color="white" size={18} /> : <EyeIcon color="white" size={18} />}
                  </Pressable>
                </View>

                <View className="mt-4">
                  <MiniLineChart />
                </View>
              </View>
            </LinearGradient>
          </MDSBlurCard>
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
