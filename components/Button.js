import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';

const screens = Dimensions.get('window');
const buttonWidth = screens.width / 4;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#333333',
    //subtracted 10 cause the margin is 5 every side so one side would be 10 total (5+5) math . floor is used to remove the lining from the button
    height: Math.floor(buttonWidth - 10),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: buttonWidth,
    margin: 5,
  },
  text: {
    color: 'orange',
    fontSize: 28,
  },
  buttonDouble: {
    flex: 0,
    width: screens.width / 2 - 10,
  },
});

export default ({onPress, text, size}) => {
  const buttonStyles = [styles.button];
  if (size === 'double') {
    buttonStyles.push(styles.buttonDouble);
  }
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
