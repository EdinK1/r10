import React from 'react';
import {LayoutAnimation} from 'react-native';
import Animated from 'react-native-reanimated';

const CollapsableText = ({children}) => {
  const animationConfig = {
    duration: 500,
    create: {
      type: 'spring',
      property: 'opacity',
      springDamping: 0.7,
    },
    delete: {
      type: 'linear',
      property: 'opacity',
      duration: 100,
    },
  };
  LayoutAnimation.configureNext(animationConfig);

  return <Animated.View>{children}</Animated.View>;
};

export default CollapsableText;
