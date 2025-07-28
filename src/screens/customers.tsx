import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomerList from '@/components/customer-list';

export const CustomersScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <CustomerList />
    </SafeAreaView>
  );
};
