import React from 'react';
import { ScrollView, Text, View } from 'react-native';

/**
 * Color Demo Component
 * Shows all available theme colors in action
 */
export default function ThemeDemo() {
  return (
    <ScrollView className="flex-1 p-6 bg-surface dark:bg-surface-dark">
      <Text className="text-2xl font-quicksand-bold text-text-primary dark:text-text-primary-dark mb-6">
        🎨 Theme System Demo
      </Text>

      {/* Primary Colors */}
      <View className="mb-8">
        <Text className="text-lg font-quicksand-semibold text-text-primary dark:text-text-primary-dark mb-4">
          Primary Colors
        </Text>
        <View className="flex-row flex-wrap gap-2">
          <View className="w-16 h-16 bg-primary-50 rounded-lg" />
          <View className="w-16 h-16 bg-primary-100 rounded-lg" />
          <View className="w-16 h-16 bg-primary-200 rounded-lg" />
          <View className="w-16 h-16 bg-primary-500 rounded-lg" />
          <View className="w-16 h-16 bg-primary-700 rounded-lg" />
          <View className="w-16 h-16 bg-primary-900 rounded-lg" />
        </View>
      </View>

      {/* Utility Blue */}
      <View className="mb-8">
        <Text className="text-lg font-quicksand-semibold text-text-primary dark:text-text-primary-dark mb-4">
          Utility Blue
        </Text>
        <View className="flex-row flex-wrap gap-2">
          <View className="w-16 h-16 bg-utility-blue-50 rounded-lg" />
          <View className="w-16 h-16 bg-utility-blue-100 rounded-lg" />
          <View className="w-16 h-16 bg-utility-blue-300 rounded-lg" />
          <View className="w-16 h-16 bg-utility-blue-500 rounded-lg" />
          <View className="w-16 h-16 bg-utility-blue-700 rounded-lg" />
        </View>
      </View>

      {/* Secondary Colors */}
      <View className="mb-8">
        <Text className="text-lg font-quicksand-semibold text-text-primary dark:text-text-primary-dark mb-4">
          Secondary Colors
        </Text>
        <View className="flex-row flex-wrap gap-2">
          <View className="w-16 h-16 bg-green-100 rounded-lg" />
          <View className="w-16 h-16 bg-green-500 rounded-lg" />
          <View className="w-16 h-16 bg-blue-100 rounded-lg" />
          <View className="w-16 h-16 bg-blue-500 rounded-lg" />
          <View className="w-16 h-16 bg-orange-100 rounded-lg" />
          <View className="w-16 h-16 bg-orange-500 rounded-lg" />
        </View>
      </View>

      {/* Semantic Colors */}
      <View className="mb-8">
        <Text className="text-lg font-quicksand-semibold text-text-primary dark:text-text-primary-dark mb-4">
          Semantic Colors
        </Text>
        <View className="space-y-4">
          <View className="bg-success-light p-4 rounded-lg border border-success">
            <Text className="text-success-dark font-quicksand-medium">✅ Success Message</Text>
          </View>

          <View className="bg-error-light p-4 rounded-lg border border-error">
            <Text className="text-error-dark font-quicksand-medium">❌ Error Message</Text>
          </View>

          <View className="bg-warning-light p-4 rounded-lg border border-warning">
            <Text className="text-warning-dark font-quicksand-medium">⚠️ Warning Message</Text>
          </View>

          <View className="bg-info-light p-4 rounded-lg border border-info">
            <Text className="text-info-dark font-quicksand-medium">ℹ️ Info Message</Text>
          </View>
        </View>
      </View>

      {/* Spacing & Effects */}
      <View className="mb-8">
        <Text className="text-lg font-quicksand-semibold text-text-primary dark:text-text-primary-dark mb-4">
          Spacing & Effects
        </Text>
        <View className="space-y-4">
          <View className="bg-surface-secondary dark:bg-surface-secondary-dark p-spacingMd rounded-radiusLg shadow-shadowMd">
            <Text className="text-text-primary dark:text-text-primary-dark">Card with theme spacing and shadow</Text>
          </View>

          <View className="bg-surface-secondary dark:bg-surface-secondary-dark p-spacingXl rounded-radiusXl shadow-shadowLg">
            <Text className="text-text-primary dark:text-text-primary-dark">
              Another card with larger spacing and shadow
            </Text>
          </View>
        </View>
      </View>

      {/* Dark Mode Toggle Example */}
      <View className="mb-8">
        <Text className="text-lg font-quicksand-semibold text-text-primary dark:text-text-primary-dark mb-4">
          Dark Mode Support
        </Text>
        <View className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <Text className="text-gray-900 dark:text-gray-100 font-quicksand-medium">
            This content adapts to dark mode automatically!
          </Text>
          <Text className="text-text-secondary dark:text-text-secondary-dark mt-2">
            Secondary text also adapts seamlessly.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
