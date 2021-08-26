import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lime',
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 15,
  },
});
