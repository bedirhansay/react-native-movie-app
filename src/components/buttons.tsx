import React, { ReactElement } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function FrostedButton({
  title,
  onPress,
  icon,
  className,
}: {
  title?: string;
  onPress?: () => void;
  icon?: ReactElement;
  className?: string;
}): ReactElement {
  return (
    <TouchableOpacity
      className={className}
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,

        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
      }}
    >
      {icon && <View>{icon}</View>}
      <Text
        style={{
          color: 'white',
          fontWeight: '600',
          fontSize: 14,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
