import { router } from 'expo-router';
import { ChevronLeft, Pencil, Search } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Header({ id }: { id?: string }) {
  return (
    <View className="flex-row items-center justify-between px-4 py-3">
      <View className="flex-row items-center space-x-3">
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={28} color="white" />
        </TouchableOpacity>

        <Text className="text-white text-xl text-primaryColors-brand-400 font-bold">Müşteriler {id}</Text>
      </View>

      <View className="flex-row space-x-3 gap-2">
        <TouchableOpacity className="border border-white/50 p-2 rounded-lg">
          <Search size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="border border-white/50 p-2 rounded-lg">
          <Pencil size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
