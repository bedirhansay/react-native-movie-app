import React from 'react';
import { Text, View } from 'react-native';

// Test component to verify NativeWind is working
export const TestComponent = () => {
  return (
    <View className="bg-blue-500 p-4 m-2 rounded-lg">
      <Text className="text-white text-center font-bold">Test Component</Text>
      <Text className="text-white text-sm mt-2 text-center">If you see blue background, NativeWind is working!</Text>
    </View>
  );
};
