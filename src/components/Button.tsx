import clsx from 'clsx';
import React from 'react';
import { Pressable, Text, ViewStyle } from 'react-native';

interface MDSButtonProps {
  title: string;
  onPress?: () => void;
  className?: string;
  style?: ViewStyle;
  disabled?: boolean;
}

export default function MDSButton({ title, onPress, className, style, disabled = false }: MDSButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={clsx(
        'self-stretch rounded-xl overflow-hidden py-4 px-6',
        'bg-white/20 backdrop-blur-sm border border-white/30',
        disabled ? 'opacity-50' : 'opacity-100',
        className
      )}
      style={[
        {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 12,
          elevation: 8,
        },
        style,
      ]}
    >
      <Text className="text-white text-base font-semibold text-center leading-normal">{title}</Text>
    </Pressable>
  );
}
