import { images } from '@/constant';
import { useCartStore } from '@/lib/store';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const CartButton = () => {
  const { getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <TouchableOpacity className="cart-btn">
      <Image source={images.bag} className="size-5" resizeMode="contain" />

      {totalItems > 0 && (
        <View className="cart-badge">
          <Text className="small-bold text-white">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
export default CartButton;
