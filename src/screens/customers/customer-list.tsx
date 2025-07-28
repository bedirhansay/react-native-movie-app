import { fakeCustomers } from '@/constant/fake-customers';
import { formatCurrency } from '@/lib/format-currency';
import clsx from 'clsx';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomerList({ header }: { header?: React.ReactElement }) {
  const insets = useSafeAreaInsets();

  return (
    <FlatList
      data={fakeCustomers}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={header}
      contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      renderItem={({ item }) => {
        const isNegative = item.balance < 0;

        return (
          <View className="flex-row items-center justify-between bg-white mx-4 my-2 p-4 rounded-xl shadow-sm">
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
          </View>
        );
      }}
    />
  );
}
