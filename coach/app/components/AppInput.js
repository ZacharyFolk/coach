import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const AppInput = ({value, placeholder, onChange, ...rest}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      style={styles.inputs}
      {...rest}
    />
  );
};
const styles = StyleSheet.create({
  inputs: {
    backgroundColor: '#fff',
    margin: 10,
  },
});
export default AppInput;
