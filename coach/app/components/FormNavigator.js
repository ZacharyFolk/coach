import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppLink from './AppLink';

const FormNavigator = ({
  leftLinkText,
  rightLinkText,
  onLeftLinkPress,
  onRightLinkPress,
}) => {
  return (
    <View style={formLinks.linkContainer}>
      <AppLink onPress={onLeftLinkPress} text={leftLinkText} />
      <AppLink onPress={onRightLinkPress} text={rightLinkText} />
    </View>
  );
};
const formLinks = StyleSheet.create({
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30,
  },
});
export default FormNavigator;
