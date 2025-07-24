import { images, offers } from '@/constant';
import React, { Fragment } from 'react';
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CartButton from '@/components/CartButton';
import cn from 'clsx';

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        ListHeaderComponent={
          <View className="flex-row items-center justify-between px-4 pt-4">
            <View className="flex-starr">
              <Text className="text-tx-primary text-yellow-600 h1-bold font-bold text-lg ">Deliver To</Text>
              <TouchableOpacity className="flex-center flex-row">
                <Text className="text-tx-secondary text-lg font-bold">Turkey</Text>
                <Image source={images.arrowDown} className="size-3" resizeMode="contain" />
              </TouchableOpacity>
            </View>

            <CartButton />
          </View>
        }
        contentContainerClassName="px-4 pt-4"
        data={offers}
        renderItem={({ item }) => {
          const isEven = item.id % 2 === 0;
          return (
            <View>
              <Pressable
                android_ripple={{ color: '#fffff22' }}
                className={cn('offer-card', isEven ? 'flex-row-reverse' : 'flex-row')}
                style={{
                  backgroundColor: item.color || '#ccc',
                }}
              >
                <Fragment>
                  <View className="h-full w-1/2">
                    <Image source={item.image} className="size-full" resizeMode="cover" />
                  </View>

                  <View className={(cn('offer-card__info'), isEven ? 'pl-10' : 'pr-10')}>
                    <Text className="text-tx-primary h1-bold font-bold text-lg">{item.title}</Text>
                    <Image className="text-tx-secondary mt-1" source={images.arrowRight} />
                  </View>
                </Fragment>
              </Pressable>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
