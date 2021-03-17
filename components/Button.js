import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';

const screens = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: 'lightblue',
    height: screens.width / 4,
  },
  text: {
    color: 'blue',
    fontSize: 28,
  },
});

export default ({onPress, text}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);
