import React from 'react';
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.limeDarkBox} />
      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
      <View style={styles.limeBox} />
      <View style={styles.pinkBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28C4D9',
    width: '100%',
    height: '100%',
  },
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: '#8BE072',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#7F7EE0',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  limeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#D6E067',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  pinkBox: {
    width: 100,
    height: 100,
    backgroundColor: '#E051C6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  limeDarkBox: {
    backgroundColor: '#E0C95C',
    ...StyleSheet.absoluteFillObject
  },
});
