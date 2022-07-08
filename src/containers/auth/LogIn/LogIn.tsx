import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StyledForm, StyledTextSignUp, StyledTitle } from './styled';
import { Button, ButtonMode, Input, InputMode } from '../../../components';

export const LogIn: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledTitle>Logowanie</StyledTitle>
      <StyledForm>
        <Input
          mode={InputMode.default}
          className="auth_form-email"
          placeholder="Email"
        />
        <Input
          mode={InputMode.default}
          className="auth_form-pass"
          placeholder="Hasło"
        />

        <Link to="/" className="forgot_pass">
          Zapomniałeś hasła?
        </Link>
        <Button mode={ButtonMode.logIn} type="submit">
          Zaloguj się
        </Button>
      </StyledForm>
      <StyledTextSignUp>Jeżeli nie posiadasz konta</StyledTextSignUp>

      <Button mode={ButtonMode.signUp} onClick={() => navigate('/auth/signup')}>
        Zarejestruj się
      </Button>
    </>
  );
};
