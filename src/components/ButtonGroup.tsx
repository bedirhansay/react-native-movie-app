import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

interface TabItem {
  key: string;
  label: string;
}

interface TabButtonGroupProps {
  tabs: TabItem[];
  onTabChange?: (key: string) => void;
  initialTabKey?: string;
}

export default function TabButtonGroup({ tabs, onTabChange, initialTabKey }: TabButtonGroupProps) {
  const [activeTab, setActiveTab] = useState(initialTabKey ?? tabs[0].key);

  const handleTabPress = (key: string) => {
    setActiveTab(key);
    onTabChange?.(key);
  };

  return (
    <View className="flex-row bg-[#FAFAFA] border border-[#E9EAEB] rounded-md p-1">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;

        return (
          <Pressable
            key={tab.key}
            onPress={() => handleTabPress(tab.key)}
            className={`flex-1 items-center py-2 rounded-lg ${
              isActive ? 'bg-white shadow-xs border border-[#E9EAEB]' : ''
            }`}
          >
            <Text className={`text-sm font-semibold  ${isActive ? 'text-gray-900 ' : 'text-gray-500'}`}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
