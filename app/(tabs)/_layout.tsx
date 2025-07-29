import { Redirect, Tabs } from 'expo-router';
import { Image, Text, View } from 'react-native';

import { images } from '@/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cn from 'clsx';
import { TabBarIconProps } from '../../type';

const TabBarIcon = ({ focused, icon, title }: TabBarIconProps) => (
  <View className={`tab-icon ${focused ? 'bg-[#FAFAFA] rounded-lg' : ''}`}>
    <Image source={icon} className="size-6 " resizeMode="contain" tintColor={focused ? '#414651' : '#5D5F6D'} />
    {focused && <Text className={cn('text-md font-bold', focused ? 'text-[#5D5F6D]' : 'text-gray-200')}>{title}</Text>}
  </View>
);

export default function TabLayout() {
  const isAuthenticated = AsyncStorage.getItem('token') !== null;

  if (!isAuthenticated) return <Redirect href="/sign-in" />;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon title="Home" icon={images.home} focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
          tabBarIcon: ({ focused }) => <TabBarIcon title="İşlemler" icon={images.grid} focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="plus"
        options={{
          title: 'Plus',
          tabBarIcon: ({ focused }) => <TabBarIcon title="Plus" icon={images.plus} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon title="Profile" icon={images.person} focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="customers"
        options={{
          href: null,
          title: 'Customers',
        }}
      />
      <Tabs.Screen
        name="/"
        options={{
          href: null,
          title: 'index',
        }}
      />
    </Tabs>
  );
}
