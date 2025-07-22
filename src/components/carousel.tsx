import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');
const MovieCard = ({
  movie,
}: {
  movie: {
    id?: number;
    title: string;
    overview: string;
  };
}) => (
  <Pressable
    onPress={() => router.push(`/movies/${movie.id!}` as any)}
    style={{
      height: 300,
      borderRadius: 16,
      overflow: 'hidden', // çok önemli: border radius'ün çalışması için
      position: 'relative',
    }}
  >
    {/* Background image */}
    <Image
      source={require('../../assets/images/images.jpeg')}
      style={{
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
      }}
      resizeMode="cover"
    />

    {/* Overlay */}
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 16,
      }}
    >
      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{movie.title}</Text>
      <Text style={{ color: 'white', fontSize: 14 }} numberOfLines={3}>
        {movie.overview}
      </Text>
    </View>
  </Pressable>
);

export default function CarouselSection({ data }: { data: any[] }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold', marginBottom: 10 }}>Featured Movies</Text>
      <Carousel
        loop
        width={width}
        height={300}
        autoPlay={false}
        data={data}
        scrollAnimationDuration={100}
        mode="parallax"
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
    </View>
  );
}
