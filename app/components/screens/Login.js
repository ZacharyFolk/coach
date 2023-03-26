import AppInput from '../AppInput';
import FormContainer from '../FormContainer';
import FormNavigator from '../FormNavigator';
import SubmitButton from '../SubmitButton';

const Login = () => {
  return (
    <FormContainer>
      <AppInput placeholder="example@email.com" />
      <AppInput placeholder="********" />
      <SubmitButton title="Login" />
    </FormContainer>
  );
};
export default Login;
