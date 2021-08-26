import React from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

export const DimensionsScreen = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{
          ...styles.purpleBox,
          width: width * .30
        }} />
        <View style={styles.orangeBox} />
      </View>
      <Text style={styles.dimensions}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'lime',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    // width: '50%',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
  dimensions: {
    fontSize: 20,
    textAlign: 'center',
  },
});
