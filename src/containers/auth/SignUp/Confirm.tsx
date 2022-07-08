import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { StyledConfirmLink, StyledConfirmText, StyledTitle } from './styled';

export const Confirm: FC = () => {
  return (
    <>
      <StyledTitle className="confirm_h1">Gratulacje</StyledTitle>
      <StyledConfirmText>
        Konto adresemail@gmail.com do profilu “Profil 1” zostało zarejestrowane
        w systmie. O akceptacji konta zostaniesz poinformowany mailem.
      </StyledConfirmText>
      <StyledConfirmLink className="confirm_link-back" to="/auth/login">
        Wróć do strony logowania
      </StyledConfirmLink>
    </>
  );
};
