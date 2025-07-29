import { SplashScreen, Stack } from 'expo-router';
import Toast from 'react-native-toast-message';
import './global.css';

import { useFonts } from 'expo-font';
import React, { Fragment, useEffect } from 'react';
import { StatusBar } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'QuickSand-Bold': require('../src/assets/fonts/Quicksand-Bold.ttf'),
    'QuickSand-Medium': require('../src/assets/fonts/Quicksand-Medium.ttf'),
    'QuickSand-Regular': require('../src/assets/fonts/Quicksand-Regular.ttf'),
    'QuickSand-Light': require('../src/assets/fonts/Quicksand-Light.ttf'),
    'QuickSand-SemiBold': require('../src/assets/fonts/Quicksand-SemiBold.ttf'),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Fragment>
      <StatusBar backgroundColor="#2D1B69" translucent={false} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(modal)"
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
      </Stack>
      <Toast />
    </Fragment>
  );
}
