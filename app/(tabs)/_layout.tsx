import { Redirect, Slot } from 'expo-router';
import React from 'react';

export default function _Layout() {
  const isAuth = true; // This should be replaced with actual authentication logic

  if (!isAuth) return <Redirect href="/(auth)/sign-in" />;

  return <Slot />;
}
