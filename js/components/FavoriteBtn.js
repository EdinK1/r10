import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import useFavorites from '../hooks/useFavorites';
import globalStyles from '../assets/styles/styles';

const FavoriteBtn = ({id, ...props}) => {
  const [favorites, addFavorite, removeFavorite] = useFavorites();
  return (
    <TouchableOpacity
      {...props}
      onPress={() =>
        favorites.includes(id) ? removeFavorite(id) : addFavorite(id)
      }>
      <Text style={globalStyles.favoriteBtnText}>
        {favorites.includes(id) ? 'Remove from Faves' : `Add to Faves`}
      </Text>
    </TouchableOpacity>
  );
};

export default FavoriteBtn;
