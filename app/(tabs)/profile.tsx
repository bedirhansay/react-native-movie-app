import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React from 'react';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  return (
    <SafeAreaView>
      <Button
        title="Çıkış Yap"
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={{
          backgroundColor: 'rgba(111, 202, 186, 1)',
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={() =>
          AsyncStorage.removeItem('token')
            .then(() => {
              router.replace('/sign-in');
            })
            .catch((error) => {
              console.error('Error removing token:', error);
            })
        }
      />
    </SafeAreaView>
  );
}
