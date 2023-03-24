import React from 'react';
import {TextInput} from 'react-native';

const AppInput = ({value, placeholder, onChange, ...rest}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  );
};

export default AppInput;
