import { Redirect, Tabs } from 'expo-router';
import { Image, Text, View } from 'react-native';

import { images } from '@/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cn from 'clsx';
import { TabBarIconProps } from '../../type';

const TabBarIcon = ({ focused, icon, title }: TabBarIconProps) => (
  <View className="tab-icon">
    <Image source={icon} className="size-7" resizeMode="contain" tintColor={focused ? '#FE8C00' : '#5D5F6D'} />
    <Text className={cn('text-sm font-bold', focused ? 'text-primary' : 'text-gray-200')}>{title}</Text>
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
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon title="Search" icon={images.search} focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="filter"
        options={{
          title: 'Filter',
          tabBarIcon: ({ focused }) => <TabBarIcon title="Filter" icon={images.search} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => <TabBarIcon title="Cart" icon={images.bag} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon title="Profile" icon={images.person} focused={focused} />,
        }}
      />
    </Tabs>
  );
}
