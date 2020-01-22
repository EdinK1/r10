import React from 'react';
import GradientHeader from '../components/GradientHeader';

export const sharedNavigationOptions = navigation => ({
  headerBackTitleVisible: false,
  headerTintColor: '#fff',
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Montserrat-Regular',
    paddingBottom: 5,
  },
});
