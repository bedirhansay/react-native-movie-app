import { TestComponent } from '@/components/TestComponent';
import React from 'react';
import { Text, View } from 'react-native';
import { cssInterop } from 'react-native-css-interop';
import { SafeAreaView } from 'react-native-safe-area-context';

// Enable CSS interop for React Native components
cssInterop(View, { className: 'style' });
cssInterop(Text, { className: 'style' });
cssInterop(SafeAreaView, { className: 'style' });

export const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-red-500">
      <View className="flex-1 p-4">
        <Text className="text-white text-xl font-bold">Home Screen</Text>
        <Text className="text-white mt-2">NativeWind is working! 🎉</Text>

        <TestComponent />

        {/* Fallback test - if className doesn't work, this should have inline styles */}
        <View style={{ backgroundColor: 'green', padding: 16, marginTop: 8, borderRadius: 8 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Fallback: If you see this green box, React Native is working but NativeWind might not be
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
