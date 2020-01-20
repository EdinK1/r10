import React from 'react';
import {Text} from 'react-native';
import useFavorites from '../../hooks/useFavorites';

const Faves = () => {
  const [favorites] = useFavorites();
  console.log(favorites);
  return <Text>{favorites}</Text>;
};

export default Faves;
