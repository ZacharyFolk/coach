import React from 'react';
import {
  Dimensions,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const SubmitButton = ({title, onPress}) => {
  return (
    <TouchableHighlight
      style={[styles.button, {backgroundColor: '#2277ee'}]}
      activeOpacity={0.7}
      underlayColor="#30aaff"
      onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  btnContainer: {
    width: width - 40,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  btnTitle: {
    fontSize: 20,
    color: '#fff',
  },
});
export default SubmitButton;
