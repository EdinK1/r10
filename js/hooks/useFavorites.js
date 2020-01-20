import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const getFavorite = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      return JSON.parse(favorites) || [];
    } catch (e) {
      Alert.alert(
        'This is akward...',
        'Something went wrong. Please try again!',
      );
    }
  };

  const addFavorite = async id => {
    try {
      if (!favorites.includes(id))
        await AsyncStorage.setItem(
          'favorites',
          JSON.stringify([...favorites, id]),
        );
    } catch (e) {
      Alert.alert(
        'This is akward...',
        'Something went wrong. Please try again!',
      );
    }
    updateFavorites();
  };

  const removeFavorite = async id => {
    const i = favorites.indexOf(id);

    try {
      if (i !== -1) {
        const updatedFavorites = [...favorites];

        updatedFavorites.splice(i, 1);

        await AsyncStorage.setItem(
          'favorites',
          JSON.stringify(updatedFavorites),
        );
      }
    } catch (e) {
      Alert.alert(
        'This is akward...',
        'Something went wrong. Please try again!',
      );
    }
    updateFavorites();
  };

  const updateFavorites = async () => {
    const favorites = await getFavorite();
    setFavorites(favorites);
  };

  useEffect(() => {
    updateFavorites();
  }, []);

  return [favorites, addFavorite, removeFavorite];
};

export default useFavorites;
