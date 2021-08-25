import React from 'react';
import { View, Text } from 'react-native';

export const HelloWorldScreen = () => {
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 35,
        }}
      >
        Hola mundo
      </Text>
    </View>
  );
};
