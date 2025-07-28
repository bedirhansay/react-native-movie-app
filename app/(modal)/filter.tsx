import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function FilterModal() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-lg font-semibold mb-4">Filter Options</Text>
      {/* filtre içerik */}
      <Button title="Apply" onPress={() => router.back()} />
    </View>
  );
}
