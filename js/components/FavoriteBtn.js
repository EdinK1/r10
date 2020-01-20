import React from 'react';
import {Button} from 'react-native';

const FavoriteBtn = ({label, ...props}) => {
  return <Button {...props} title={label}></Button>;
};

export default FavoriteBtn;
