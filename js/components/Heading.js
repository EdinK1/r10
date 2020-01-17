import React from 'react';
import {Text} from 'react-native';

const Heading = ({children, ...props}) => <Text {...props}>{children}</Text>;

export default Heading;
