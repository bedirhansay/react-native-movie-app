import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--brand-600)' }}>Welcome to Nativewinds!</Text>
    </View>
  );
}
