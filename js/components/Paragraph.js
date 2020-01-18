import React from 'react';
import {Text} from 'react-native';
import globalStyles from '../assets/styles/styles';

const Paragraph = ({children, ...props}) => (
  <Text style={globalStyles.paragraph} {...props}>
    {children}
  </Text>
);

export default Paragraph;
