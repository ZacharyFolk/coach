import React from 'react';
import AppInput from '../components/AppInput';
import FormContainer from '../components/FormContainer';
import FormNavigator from '../components/FormNavigator';
import SubmitButton from '../components/SubmitButton';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <FormContainer>
      <AppInput placeholder="example@email.com" />
      <AppInput placeholder="********" />
      <AppInput placeholder="********" />
      <SubmitButton title="Sign Up" />
      <FormNavigator
        onLeftLinkPress={navigateToLogin}
        leftLinkText="Log in"
        rightLinkText="Forgot password"
      />
    </FormContainer>
  );
};
export default Login;
