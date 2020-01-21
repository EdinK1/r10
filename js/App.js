import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import ApolloWrapper from './components/Apollo';
import Navigator from './navigation/Navigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ApolloWrapper>
      <Navigator />
    </ApolloWrapper>
  );
};

export default App;
