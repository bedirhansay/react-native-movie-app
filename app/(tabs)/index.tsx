import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#2D1B69' }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-white text-3xl font-bold mb-6 text-center">Mersel&apos;e Hoş Geldiniz</Text>

        <TouchableOpacity
          onPress={() => router.push('/customers')}
          className="bg-white px-6 py-3 rounded-full shadow-lg"
        >
          <Text className="text-purple-800 text-base font-semibold">Gezinmeye Başla</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
