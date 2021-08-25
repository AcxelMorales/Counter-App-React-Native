import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Fab } from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  const handleOnIncrement = () => setCounter(counter + 1);
  const handleOnDecrement = () => setCounter(counter - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.textMain}>Counter: {counter}</Text>
      <Fab title="+1" onPress={handleOnIncrement} />
      <Fab title="-1" position="bl" onPress={handleOnDecrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMain: {
    fontSize: 30,
    top: -15,
  },
});
