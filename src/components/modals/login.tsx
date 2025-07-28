import React, { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import CustomInput from '../CustomInput';

export interface MDSModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (formData: { fullName: string; email: string; password: string }) => void;
}

export default function MDSModal({ visible, onClose, onSubmit }: MDSModalProps) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!form.fullName || !form.password) {
      Toast.show({
        type: 'error',
        text1: 'Eksik Bilgi',
        text2: 'Lütfen tüm alanları eksiksiz doldurun.',
      });
      return;
    }

    onSubmit(form);
    Toast.show({
      type: 'success',
      text1: 'Giriş Başarılı',
      text2: `Hoş geldiniz, ${form.fullName}!`,
    });
    onClose();
  };

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1 justify-end">
        <View className="flex-1 bg-black/60 justify-end">
          <View className="bg-white px-6 pt-6 py-20 rounded-t-3xl shadow-lg">
            <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} className="space-y-4">
              <Text className="text-2xl font-bold text-center text-gray-900 mb-2">Giriş Yap</Text>

              <CustomInput
                placeholder="Ad Soyad"
                label="Ad Soyad"
                value={form.fullName}
                onChangeText={(val) => handleChange('fullName', val)}
              />

              <CustomInput
                placeholder="E-posta adresi"
                label="E-posta"
                keyboardType="email-address"
                value={form.email}
                onChangeText={(val) => handleChange('email', val)}
              />

              <CustomInput
                placeholder="Şifre"
                label="Şifre"
                secureTextEntry={true}
                value={form.password}
                onChangeText={(val) => handleChange('password', val)}
              />

              <View className="flex-row gap-4 mt-6">
                <TouchableOpacity
                  className="flex-1 bg-gray-200 py-3 rounded-xl items-center"
                  onPress={onClose}
                  accessibilityRole="button"
                >
                  <Text className="text-gray-700 font-semibold text-base">Vazgeç</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-1 bg-red-500 py-3 rounded-xl items-center"
                  onPress={handleSubmit}
                  accessibilityRole="button"
                >
                  <Text className="text-white font-semibold text-base">Giriş Yap</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
