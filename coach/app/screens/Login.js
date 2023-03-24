import React from 'react';
import AppInput from '../components/AppInput';
import FormContainer from '../components/FormContainer';
import FormNavigator from '../components/FormNavigator';
import SubmitButton from '../components/SubmitButton';

const Login = () => {
  return (
    <FormContainer>
      <AppInput placeholder="example@email.com" />
      <AppInput placeholder="********" />
      <SubmitButton title="Login" />
      <FormNavigator leftLinkText="Sign up" rightLinkText="Forgot password" />
    </FormContainer>
  );
};
export default Login;
