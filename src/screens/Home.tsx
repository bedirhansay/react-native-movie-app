import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Bars4Icon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import CarouselSection from '../components/carousel';
import MovieList from '../components/MovieList';

export const HomeScreen = () => {
  const data = [
    { id: 1, title: 'Movie 1', overview: 'Awesome movie 1' },
    { id: 2, title: 'Movie 2', overview: 'Awesome movie 2' },
    { id: 3, title: 'Movie 3', overview: 'Awesome movie 3' },
    { id: 4, title: 'Movie 4', overview: 'Awesome movie 4' },
    { id: 5, title: 'Movie 5', overview: 'Awesome movie 5' },
    { id: 6, title: 'Movie 6', overview: 'Awesome movie 6' },
    { id: 7, title: 'Movie 7', overview: 'Awesome movie 7' },
    { id: 8, title: 'Movie 8', overview: 'Awesome movie 8' },
    { id: 9, title: 'Movie 9', overview: 'Awesome movie 9' },
    { id: 10, title: 'Movie 10', overview: 'Awesome movie 10' },
    { id: 11, title: 'Movie 11', overview: 'Awesome movie 11' },
    { id: 12, title: 'Movie 12', overview: 'Awesome movie 12' },
    { id: 13, title: 'Movie 13', overview: 'Awesome movie 13' },
    { id: 14, title: 'Movie 14', overview: 'Awesome movie 14' },
    { id: 15, title: 'Movie 15', overview: 'Awesome movie 15' },
    { id: 16, title: 'Movie 16', overview: 'Awesome movie 16' },
  ];

  const categories = [
    {
      title: 'Trending',
      key: 'trending',
      movies: [
        { id: 1, title: 'Movie 1', overview: 'Awesome trending movie 1' },
        { id: 2, title: 'Movie 2', overview: 'Awesome trending movie 2' },
      ],
    },
    {
      title: 'Top Rated',
      key: 'top-rated',
      movies: [
        { id: 3, title: 'Movie 3', overview: 'Top rated movie 3' },
        { id: 4, title: 'Movie 4', overview: 'Top rated movie 4' },
      ],
    },
    {
      title: 'Upcoming',
      key: 'upcoming',
      movies: [
        { id: 5, title: 'Movie 5', overview: 'Upcoming movie 5' },
        { id: 6, title: 'Movie 6', overview: 'Upcoming movie 6' },
      ],
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar style="dark" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 16,
          marginTop: 8,
        }}
      >
        <Bars4Icon size={24} color="black" />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Movies</Text>
        <TouchableOpacity>
          <MagnifyingGlassIcon size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <CarouselSection data={data} />
        <MovieList categories={categories} />
      </ScrollView>
    </SafeAreaView>
  );
};
