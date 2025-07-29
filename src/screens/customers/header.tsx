import CarouselSection from '@/components/carousel';
import CustomerList from '@/screens/customers/customer-list';

import { Link } from 'expo-router';
import { ChevronRight, Plus, Search } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FavCustomer from './fav-customer';

export default function Header() {
  return (
    <SafeAreaView className="flex-1 bg-transparent">
      <View className="h-72 px-4 pt-2">
        <View className="flex-row justify-between items-start">
          <Text className="text-white text-2xl font-bold">Müşteriler</Text>
          <View className="flex-row gap-2">
            <TouchableOpacity className="border border-white/50 p-2 rounded-lg">
              <Plus size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="border border-white/50 p-2 rounded-lg">
              <Search size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="flex-1 absolute top-64 left-0 right-0 bottom-0 bg-white rounded-t-3xl pt-6">
        <View className="ml-8 -top-36">
          <CarouselSection />
        </View>
      </View>

      <View className="flex-row justify-between items-center px-4 pt-16 ">
        <Text className="text-gray-800 text-lg font-bold">Favori Müşteriler</Text>

        <View className="flex-row items-center">
          <Link href="/customers" className="text-gray-800 text-sm font-semibold">
            Tümünü Gör
          </Link>

          <ChevronRight size={16} color="#4B5563" />
        </View>
      </View>
      <View className=" bg-[#FAFAFA] border border-[#E9EAEB] m-4 rounded-xl  overflow-hidden py-2 ">
        <FavCustomer />
      </View>

      <View className="flex-row justify-between items-center px-4  ">
        <Text className="text-gray-800 text-lg font-bold">Müşteriler</Text>

        <View className="flex-row items-center">
          <Link href="/customers" className="text-gray-800 text-sm font-semibold">
            Tümünü Gör
          </Link>

          <ChevronRight size={16} color="#4B5563" />
        </View>
      </View>
      <View className=" p-4 ">
        <CustomerList />
      </View>
    </SafeAreaView>
  );
}
