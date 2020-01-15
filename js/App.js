import React from 'react';
import {StyleSheet, Text} from 'react-native';
import About from './screens/About';
import ApolloWrapper from './components/Apollo';

const App = () => {
  return (
    <ApolloWrapper>
      <About />
    </ApolloWrapper>
  );
};

// const styles = StyleSheet.create({});

export default App;
