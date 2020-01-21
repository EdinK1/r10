import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import useFavorites from '../hooks/useFavorites';

const FavoriteBtn = ({id, ...props}) => {
  const [favorites, addFavorite, removeFavorite] = useFavorites();
  return (
    <TouchableOpacity
      {...props}
      onPress={() =>
        favorites.includes(id) ? removeFavorite(id) : addFavorite(id)
      }>
      <Text>{favorites.includes(id) ? `💜` : `💟`}</Text>
    </TouchableOpacity>
  );
};

export default FavoriteBtn;
