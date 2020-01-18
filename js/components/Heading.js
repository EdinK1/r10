import React from 'react';
import {Text} from 'react-native';
import globalStyles from '../assets/styles/styles';

const Heading = ({children, ...props}) => (
  <Text style={globalStyles.title} {...props}>
    {children}
  </Text>
);

export default Heading;
