import React from 'react';
import {
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Text,
  Platform,
} from 'react-native';

type Props = {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
};

export const Fab = ({ title, onPress, position = 'br' }: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}
      >
        <View style={styles.button}>
          <Text style={styles.textButton}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}
      >
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
          onPress={onPress}
        >
          <View style={styles.button}>
            <Text style={styles.textButton}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: '#5856D6',
    height: 60,
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  fabLocation: {
    position: 'absolute',
    bottom: 20,
  },
  right: {
    right: 20,
  },
  left: {
    left: 20,
  },
});
