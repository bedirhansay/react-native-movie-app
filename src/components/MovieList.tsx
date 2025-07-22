import { router } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

type Movie = {
  id: number;
  title: string;
  overview: string;
};

type Category = {
  title: string;
  key: string;
  movies: Movie[];
};

const MovieList = ({ categories }: { categories: Category[] }) => {
  return (
    <View className="px-4">
      {categories?.map((category) => (
        <View key={category.key} className="mb-6">
          {/* Category Header */}
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-bold">{category.title}</Text>
            <Pressable onPress={() => router.push(`/category/${category.key}`)}>
              <Text className="text-sm text-blue-500 font-medium">See All</Text>
            </Pressable>
          </View>

          {/* Movie Items */}
          {category?.movies.map((movie) => (
            <Pressable
              key={movie.id}
              onPress={() => router.push(`/movies/${movie.id}`)}
              className="bg-white p-3 rounded-lg shadow mb-3"
            >
              <Text className="text-md font-semibold">{movie.title}</Text>
              <Text className="text-xs text-gray-500">{movie.overview}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

export default MovieList;
