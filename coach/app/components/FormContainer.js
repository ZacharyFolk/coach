import React from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from 'react-native';

const FormContainer = ({children}) => {
  return (
    <KeyboardAvoidingView style={formStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../assets/squatch7.png')}
          style={formStyles.logo}
        />
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const {height} = Dimensions.get('window');
const logoHeight = height * 0.1;
const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: logoHeight,
  },
});
export default FormContainer;
