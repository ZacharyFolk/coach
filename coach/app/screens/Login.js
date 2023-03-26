import {useNavigation} from '@react-navigation/native';
import React from 'react';
import AppInput from '../components/AppInput';
import FormContainer from '../components/FormContainer';
import FormNavigator from '../components/FormNavigator';
import SubmitButton from '../components/SubmitButton';

const Login = () => {
  const navigation = useNavigation();
  const navigateToSignup = () => {
    navigation.navigate('Signup');
  };

  const test = () => {
    console.log('woo');
  };
  return (
    <FormContainer>
      <AppInput placeholder="example@email.com" />
      <AppInput placeholder="********" />
      <SubmitButton title="Login" onPress={test} />
      <FormNavigator
        onLeftLinkPress={navigateToSignup}
        leftLinkText="Sign up"
        rightLinkText="Forgot password"
      />
    </FormContainer>
  );
};
export default Login;
