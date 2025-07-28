import { Stack } from 'expo-router';
import Toast from 'react-native-toast-message';
import './global.css';

import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  // const [fontsLoaded, error] = useFonts({
  //   'QuickSand-Bold': require('../../assets/fonts/Quicksand-Bold.ttf'),
  //   'QuickSand-Medium': require('../../assets/fonts/Quicksand-Medium.ttf'),
  //   'QuickSand-Regular': require('../../assets/fonts/Quicksand-Regular.ttf'),
  //   'QuickSand-Light': require('../../assets/fonts/Quicksand-Light.ttf'),
  //   'QuickSand-SemiBold': require('../../assets/fonts/Quicksand-SemiBold.ttf'),
  // });

  // useEffect(() => {
  //   if (error) throw error;
  //   if (!fontsLoaded) return;
  //   if (fontsLoaded) SplashScreen.hideAsync();
  // }, [fontsLoaded, error]);

  return (
    <Fragment>
      <StatusBar backgroundColor="#1C1B22" translucent={false} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
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
