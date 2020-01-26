import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import useFavorites from '../hooks/useFavorites';
import Icon from 'react-native-vector-icons/Ionicons';

const FavoriteIcon = ({id, ...props}) => {
  const [favorites, addFavorite, removeFavorite] = useFavorites();
  return (
    <TouchableOpacity
      {...props}
      onPress={() =>
        favorites.includes(id) ? removeFavorite(id) : addFavorite(id)
      }>
      <Icon
        size={20}
        color="#c04534"
        name={favorites.includes(id) ? 'ios-heart' : 'ios-heart-empty'}
      />
    </TouchableOpacity>
  );
};

export default FavoriteIcon;
