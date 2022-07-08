import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButtonGroup, StyledForm, StyledTitle } from './styled';
import { Button, ButtonMode, Input, InputMode } from '../../../components';

export const SignUp: FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<number>(1);

  return (
    <>
      <StyledTitle>Zarejestruj się</StyledTitle>
      <StyledForm>
        <StyledButtonGroup className="auth_form-btn-group">
          <Button
            mode={ButtonMode.text}
            isActive={(active === 1 && true) || false}
            onClick={() => setActive(1)}
          >
            Profil Zwykły
          </Button>

          <Button
            mode={ButtonMode.text}
            isActive={(active === 2 && true) || false}
            onClick={() => setActive(2)}
          >
            Profil miejski
          </Button>
        </StyledButtonGroup>

        <Input
          mode={InputMode.default}
          className="auth_form-name auth_form-input"
          placeholder="Nazwa profilu"
        />
        <Input
          mode={InputMode.default}
          className="auth_form-email auth_form-input"
          placeholder="Email"
        />
        <Input
          mode={InputMode.default}
          className="auth_form-pass auth_form-input"
          placeholder="Hasło"
        />
        <Input
          mode={InputMode.default}
          className="auth_form-confirm-pass auth_form-input"
          placeholder="Powtórz hasło"
        />

        <Button
          mode={ButtonMode.signUp}
          className="auth_form-submit"
          onClick={() => navigate('confirm')}
        >
          Zarejestruj się
        </Button>
      </StyledForm>
    </>
  );
};
