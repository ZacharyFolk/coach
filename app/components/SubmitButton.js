import React from 'react';
import {Pressable, Text} from 'react-native/types';

const SubmitButton = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;
