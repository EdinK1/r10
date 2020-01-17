import React from 'react';
import {Text} from 'react-native';

const Paragraph = ({children, ...props}) => <Text {...props}>{children}</Text>;

export default Paragraph;
