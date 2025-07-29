import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { ChevronRight, Edit, LogOut, Settings, Shield, User } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  const profileMenuItems = [
    {
      id: '1',
      title: 'Hesap Bilgileri',
      subtitle: 'Kişisel bilgilerinizi düzenleyin',
      icon: <User size={20} color="#6B7280" />,
      onPress: () => console.log('Hesap Bilgileri'),
    },
    {
      id: '2',
      title: 'Güvenlik',
      subtitle: 'Şifre ve güvenlik ayarları',
      icon: <Shield size={20} color="#6B7280" />,
      onPress: () => console.log('Güvenlik'),
    },
    {
      id: '3',
      title: 'Ayarlar',
      subtitle: 'Uygulama tercihleri',
      icon: <Settings size={20} color="#6B7280" />,
      onPress: () => console.log('Ayarlar'),
    },
  ];

  const handleLogout = () => {
    AsyncStorage.removeItem('token')
      .then(() => {
        router.replace('/sign-in');
      })
      .catch((error) => {
        console.error('Error removing token:', error);
      });
  };

  return (
    <View className="flex-1">
      <View
        className="absolute inset-0 bg-gradient-to-b from-purple-900 to-indigo-900"
        style={{ backgroundColor: '#2D1B69' }}
      />

      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View className="px-6 py-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-2xl font-bold">Profil</Text>
              <TouchableOpacity className="w-10 h-10 rounded-full bg-white/20 items-center justify-center">
                <Edit size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Profile Card */}
          <View className="mx-6 mb-6">
            <View className="bg-white rounded-2xl p-6 shadow-lg">
              <View className="items-center">
                {/* Profile Image */}
                <View className="w-24 h-24 rounded-full bg-gray-200 items-center justify-center mb-4">
                  <Image source={{ uri: 'https://via.placeholder.com/96x96' }} className="w-24 h-24 rounded-full" />
                </View>

                {/* User Info */}
                <Text className="text-gray-800 text-xl font-bold mb-1">Mehmet Yılmaz</Text>
                <Text className="text-gray-500 text-sm mb-4">mehmet.yilmaz@email.com</Text>

                {/* Stats */}
                <View className="flex-row w-full justify-around bg-gray-50 rounded-xl p-4">
                  <View className="items-center">
                    <Text className="text-gray-800 text-lg font-bold">24</Text>
                    <Text className="text-gray-500 text-xs">İşlemler</Text>
                  </View>
                  <View className="w-px bg-gray-300" />
                  <View className="items-center">
                    <Text className="text-green-600 text-lg font-bold">₺12,500</Text>
                    <Text className="text-gray-500 text-xs">Bakiye</Text>
                  </View>
                  <View className="w-px bg-gray-300" />
                  <View className="items-center">
                    <Text className="text-purple-600 text-lg font-bold">₺8,200</Text>
                    <Text className="text-gray-500 text-xs">Bu Ay</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Menu Items */}
          <View className="mx-6 mb-6">
            <View className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {profileMenuItems.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={item.onPress}
                  className={`p-4 flex-row items-center justify-between ${
                    index !== profileMenuItems.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <View className="flex-row items-center flex-1">
                    <View className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center mr-3">
                      {item.icon}
                    </View>
                    <View className="flex-1">
                      <Text className="text-gray-800 font-semibold text-base">{item.title}</Text>
                      <Text className="text-gray-500 text-sm mt-1">{item.subtitle}</Text>
                    </View>
                  </View>
                  <ChevronRight size={16} color="#9CA3AF" />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Logout Button */}
          <View className="mx-6 mb-6">
            <TouchableOpacity
              onPress={handleLogout}
              className="bg-red-50 border border-red-200 rounded-2xl p-4 flex-row items-center justify-center"
            >
              <LogOut size={20} color="#EF4444" />
              <Text className="text-red-600 font-semibold text-base ml-2">Çıkış Yap</Text>
            </TouchableOpacity>
          </View>

          {/* App Version */}
          <View className="items-center pb-6">
            <Text className="text-white/60 text-sm">Versiyon 1.0.0</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
