import React, { ReactElement } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface FrostedButtonProps {
  title?: string;
  onPress?: () => void;
  icon?: ReactElement;
  className?: string;
  children?: React.ReactNode;
  titleClassName?: string;
}

export default function FrostedButton({
  title,
  onPress,
  icon,
  className = '',
  children,
  titleClassName = '',
}: FrostedButtonProps): ReactElement {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`
        flex-row items-center justify-center
        border border-white/30
        rounded-xl px-4 py-2.5
        bg-white/5
        ${className}
      `}
    >
      {icon && <View>{icon}</View>}
      <Text className={`text-white font-semibold text-sm ${titleClassName}`}>{children || title}</Text>
    </TouchableOpacity>
  );
}
