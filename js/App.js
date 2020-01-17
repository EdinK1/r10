import React from 'react';
import {StyleSheet, Text} from 'react-native';
import ApolloWrapper from './components/Apollo';
import Navigator from './navigation/Navigator';

const App = () => {
  return (
    <ApolloWrapper>
      <Navigator />
      {/* <About /> */}
      {/* <Schedule /> */}
      {/* <Map /> */}
    </ApolloWrapper>
  );
};

// const styles = StyleSheet.create({});

export default App;
