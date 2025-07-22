import { Stack } from 'expo-router';

export default function MoviesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="[id]/index"
        options={{
          title: 'Movie Categories',
          presentation: 'modal',
          headerBackTitle: 'Back',
        }}
      />
    </Stack>
  );
}
