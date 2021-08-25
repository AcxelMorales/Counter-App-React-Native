import React from 'react';
import { SafeAreaView } from 'react-native';

// import { HelloWorldScreen } from './src/screens/HelloWorldScreen';
import { CounterScreen } from './src/screens/CounterScreen';

const App = () => {
  return (
    <SafeAreaView>
      <CounterScreen />
    </SafeAreaView>
  );
};

export default App;
