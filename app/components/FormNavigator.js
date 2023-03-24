import React from 'react';
import {View} from 'react-native/types';
import AppLink from './AppLink';

const FormNavigator = ({
  leftLinkText,
  rightLinkText,
  onLeftLinkPress,
  onRightLinkPress,
}) => {
  return (
    <View>
      <AppLink onPress={onLeftLinkPress} text={leftLinkText} />
      <AppLink onPress={onRightLinkPress} text={rightLinkText} />
    </View>
  );
};

export default FormNavigator;
