import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import globalStyles from '../assets/styles/styles';

const Spinner = () => (
  <View style={globalStyles.spinner}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

export default Spinner;
