import React from 'react';
import { ScrollView, Text, View } from 'react-native';

/**
 * Static Colors Demo Component
 * Shows usage of static color system in React Native
 */
export default function StaticColorsDemo() {
  return (
    <ScrollView className="flex-1 p-6 bg-white">
      <Text className="text-2xl font-quicksand-bold text-gray-900 mb-6">🎨 Static Color System Demo</Text>

      {/* Primary Colors */}
      <View className="mb-8">
        <Text className="text-lg font-quicksand-semibold text-gray-700 mb-4">Primary Colors</Text>
        <View className="flex-row flex-wrap gap-2">
          <View className="w-16 h-16 bg-brand-100 rounded-lg" />
          <View className="w-16 h-16 bg-brand-300 rounded-lg" />
          <View className="w-16 h-16 bg-brand-500 rounded-lg" />
          <View className="w-16 h-16 bg-brand-700 rounded-lg" />
          <View className="w-16 h-16 bg-brand-900 rounded-lg" />
        </View>
      </View>

      {/* Gray Variants */}
      <View className="mb-8">
        <Text className="text-lg font-quicksand-semibold text-gray-700 mb-4">Gray Variants</Text>
        <View className="space-y-2">
          <View className="flex-row gap-2">
            <View className="w-12 h-12 bg-gray-100 rounded border" />
            <View className="w-12 h-12 bg-gray-300 rounded border" />
            <View className="w-12 h-12 bg-gray-500 rounded border" />
            <View className="w-12 h-12 bg-gray-700 rounded border" />
            <View className="w-12 h-12 bg-gray-900 rounded border" />
          </View>
          <Text className="text-sm text-gray-600">Standard Gray</Text>

          <View className="flex-row gap-2">
            <View className="w-12 h-12 bg-gray-cool-100 rounded border" />
            <View className="w-12 h-12 bg-gray-cool-300 rounded border" />
            <View className="w-12 h-12 bg-gray-cool-500 rounded border" />
            <View className="w-12 h-12 bg-gray-cool-700 rounded border" />
            <View className="w-12 h-12 bg-gray-cool-900 rounded border" />
          </View>
          <Text className="text-sm text-gray-600">Cool Gray</Text>

          <View className="flex-row gap-2">
            <View className="w-12 h-12 bg-gray-modern-100 rounded border" />
            <View className="w-12 h-12 bg-gray-modern-300 rounded border" />
            <View className="w-12 h-12 bg-gray-modern-500 rounded border" />
            <View className="w-12 h-12 bg-gray-modern-700 rounded border" />
            <View className="w-12 h-12 bg-gray-modern-900 rounded border" />
          </View>
          <Text className="text-sm text-gray-600">Modern Gray</Text>
        </View>
      </View>

      {/* State Colors */}
      <View className="mb-8">
        <Text className="text-lg font-quicksand-semibold text-gray-700 mb-4">State Colors</Text>
        <View className="space-y-4">
          <View className="bg-success-100 p-4 rounded-lg border border-success-300">
            <Text className="text-success-700 font-quicksand-medium">
              ✅ Success State - bg-success-100, text-success-700
            </Text>
          </View>

          <View className="bg-error-100 p-4 rounded-lg border border-error-300">
            <Text className="text-error-700 font-quicksand-medium">❌ Error State - bg-error-100, text-error-700</Text>
          </View>

          <View className="bg-warning-100 p-4 rounded-lg border border-warning-300">
            <Text className="text-warning-700 font-quicksand-medium">
              ⚠️ Warning State - bg-warning-100, text-warning-700
            </Text>
          </View>
        </View>
      </View>

      {/* Secondary Colors */}
      <View className="mb-8">
        <Text className="text-lg font-quicksand-semibold text-gray-700 mb-4">Secondary Colors</Text>
        <View className="flex-row flex-wrap gap-2">
          <View className="w-16 h-16 bg-blue-500 rounded-lg" />
          <View className="w-16 h-16 bg-green-500 rounded-lg" />
          <View className="w-16 h-16 bg-purple-500 rounded-lg" />
          <View className="w-16 h-16 bg-pink-500 rounded-lg" />
          <View className="w-16 h-16 bg-orange-500 rounded-lg" />
          <View className="w-16 h-16 bg-yellow-500 rounded-lg" />
        </View>
      </View>

      {/* Usage Examples */}
      <View className="mb-8">
        <Text className="text-lg font-quicksand-semibold text-gray-700 mb-4">Usage Examples</Text>
        <View className="space-y-3">
          <Text className="text-sm text-gray-600 font-mono">className=&quot;bg-brand-500 text-white&quot;</Text>
          <View className="bg-brand-500 p-3 rounded">
            <Text className="text-white font-quicksand-medium">Brand Color Button</Text>
          </View>

          <Text className="text-sm text-gray-600 font-mono">
            className=&quot;bg-gray-100 border border-gray-300&quot;
          </Text>
          <View className="bg-gray-100 border border-gray-300 p-3 rounded">
            <Text className="text-gray-700 font-quicksand-medium">Subtle Card Background</Text>
          </View>
        </View>
      </View>

      <View className="bg-gray-50 p-4 rounded-lg">
        <Text className="text-sm text-gray-600 text-center">
          🎉 All colors are now static and React Native compatible!
        </Text>
        <Text className="text-xs text-gray-500 text-center mt-2">No more CSS variables, pure Tailwind classes</Text>
      </View>
    </ScrollView>
  );
}
