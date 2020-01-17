import React from 'react';
import {SafeAreaView} from 'react-navigation';

const Section = ({children, ...props}) => (
  <SafeAreaView {...props}>{children}</SafeAreaView>
);

export default Section;
