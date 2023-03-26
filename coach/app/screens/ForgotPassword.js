import {View, StyleSheet} from 'react-native';
import React from 'react';
import FormContainer from '../components/FormContainer';
import AppInput from '../components/AppInput';
import SubmitButton from '../components/SubmitButton';
import FormNavigator from '../components/FormNavigator';

const ForgotPassword = () => {
  return (
    <FormContainer>
      <AppInput placeholder="example@email.com" />
      <SubmitButton title="Send Link" />
      <FormNavigator leftLinkText="Log in" rightLinkText="Sign up" />
    </FormContainer>
  );
};
export default ForgotPassword;
