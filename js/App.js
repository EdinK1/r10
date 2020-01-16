import React from 'react';
import {StyleSheet, Text} from 'react-native';
import About from './screens/About';
import ApolloWrapper from './components/Apollo';
import Schedule from './screens/Schedule/Schedule';

const App = () => {
  return (
    <ApolloWrapper>
      {/* <About /> */}
      <Schedule />
    </ApolloWrapper>
  );
};

// const styles = StyleSheet.create({});

export default App;
