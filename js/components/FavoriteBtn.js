import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import useFavorites from '../hooks/useFavorites';
import globalStyles from '../assets/styles/styles';
import LinearGradient from 'react-native-linear-gradient';

const FavoriteBtn = ({id, ...props}) => {
  const [favorites, addFavorite, removeFavorite] = useFavorites();
  return (
    <TouchableOpacity
      {...props}
      onPress={() =>
        favorites.includes(id) ? removeFavorite(id) : addFavorite(id)
      }>
      <LinearGradient
        colors={['#9963ea', '#8797D6']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 0.0}}
        style={globalStyles.favoriteBtn}>
        <Text style={globalStyles.favoriteBtnText}>
          {favorites.includes(id) ? 'Remove from Faves' : `Add to Faves`}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default FavoriteBtn;
