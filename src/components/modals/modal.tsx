import { Ionicons } from '@expo/vector-icons';
import cn from 'clsx';
import React from 'react';
import { Dimensions, Modal, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';

const { height } = Dimensions.get('screen');

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  type: 'danger' | 'info';
  title: string;
  description: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
}

export default function CustomModal({
  visible,
  onClose,
  type = 'info',
  title,
  description,
  message,
  confirmText = 'Tamam',
  cancelText = 'Vazgeç',
  onConfirm,
}: CustomModalProps) {
  const isDanger = type === 'danger';

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black/50 justify-end">
          <TouchableWithoutFeedback>
            <View className="bg-white rounded-t-2xl p-6" style={{ minHeight: height * 0.35 }}>
              <View className="items-center mb-4">
                <Ionicons
                  name={isDanger ? 'trash-bin' : 'alert-circle'}
                  size={40}
                  color={isDanger ? '#EF4444' : '#FACC15'}
                />
              </View>

              <Text className="text-center text-lg font-semibold mb-2">{title}</Text>
              <Text className="text-center text-gray-600 mb-4">{description}</Text>

              {message && (
                <View className={cn('rounded-md px-3 py-2 mb-4', isDanger ? 'bg-red-100' : 'bg-blue-100')}>
                  <Text className={cn('text-sm', isDanger ? 'text-red-700' : 'text-blue-700')}>{message}</Text>
                </View>
              )}

              <View className="flex-row justify-between mt-auto">
                <Pressable onPress={onClose} className="flex-1 mr-2 py-3 rounded-xl bg-gray-100 items-center">
                  <Text className="text-gray-700 font-semibold">{cancelText}</Text>
                </Pressable>
                {onConfirm && (
                  <Pressable
                    onPress={onConfirm}
                    className={cn('flex-1 ml-2 py-3 rounded-xl items-center', isDanger ? 'bg-red-500' : 'bg-blue-500')}
                  >
                    <Text className="text-white font-semibold">{confirmText}</Text>
                  </Pressable>
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
