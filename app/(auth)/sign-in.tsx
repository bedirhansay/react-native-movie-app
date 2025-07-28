import MDSButton from '@/components/Button';
import MDSModal from '@/components/modals/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);

  const submit = async ({ email, password }: { email: string; password: string }) => {
    if (!password) {
      Alert.alert('Hata', 'Lütfen geçerli e-posta ve şifre girin.');
      return;
    }

    setIsSubmitting(true);

    try {
      const token = '22324433';
      await AsyncStorage.setItem('token', token);
      router.replace('/(tabs)');
    } catch (error: any) {
      Alert.alert('Hata', error.message || 'Giriş sırasında bir hata oluştu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="absolute left-0 right-0 bottom-0 px-6 justify-end" style={{ paddingBottom: insets.bottom + 20 }}>
      <MDSButton title="Giriş Yap" onPress={() => setModalVisible(true)} disabled={isSubmitting} />

      <TouchableOpacity>
        <Text className="text-center text-white mt-4">
          Hesabınız Yok mu? <Text className="font-semibold underline">Hesap Oluştur</Text>
        </Text>
      </TouchableOpacity>

      <MDSModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={(data) => {
          submit(data);
        }}
      />
    </View>
  );
};

export default SignIn;
