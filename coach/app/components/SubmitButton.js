import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text} from 'react-native';

const SubmitButton = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress} style={submitStyle.btnContainer}>
      <Text style={submitStyle.btnTitle}>{title}</Text>
    </Pressable>
  );
};
const {width} = Dimensions.get('window');
const submitStyle = StyleSheet.create({
  btnContainer: {
    width: width - 40,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    fontSize: 20,
    color: '#fff',
  },
});
export default SubmitButton;
