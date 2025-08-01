import { fakeCustomers } from '@/lib/constant/fake-customers';
import { formatCurrency } from '@/lib/format-currency';
import clsx from 'clsx';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomerList({ header }: { header?: React.ReactElement }) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}>
      {header}

      {fakeCustomers.map((item) => {
        const isNegative = item.balance < 0;

        return (
          <Pressable
            onPress={() => router.push(`/customers/${item.id}`)}
            key={item.id}
            className="flex-row items-center border border-[#E9EAEB] justify-between bg-white mx-1 my-2 p-4 rounded-xl shadow-xs"
          >
            <View
              className="h-12 w-12 rounded-full items-center justify-center"
              style={{ backgroundColor: item.logoColor }}
            >
              <Text className="text-white font-bold">{item.name.charAt(0)}</Text>
            </View>

            <View className="flex-1 mx-4">
              <Text className="font-semibold text-gray-800" numberOfLines={1}>
                {item.name}
              </Text>
              <Text className="text-xs text-gray-500">{item.taxNumber}</Text>
            </View>

            <View className="items-end">
              <Text className="text-xs text-gray-400">Bakiye</Text>
              <Text className={clsx('font-bold', isNegative ? 'text-red-600' : 'text-gray-800')}>
                {formatCurrency(item.balance)}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
