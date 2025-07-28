import { Stack } from 'expo-router';

export default function ModalLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="filter"
        options={{
          title: 'Filter Options',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
