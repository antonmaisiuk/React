import React, { FC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { StyledHeaderWrapper, StyledLink } from './styled';
import { HeaderLogo } from '../ui/Icons/LogoIcons';

export const Header: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <StyledHeaderWrapper {...{ className }}>
      {/* <Link to="/">
        <HeaderLogo />
      </Link> */}
      <StyledLink>
        <HeaderLogo />
      </StyledLink>

      {/* <StyledLink to="/">Wyloguj się</StyledLink> */}
      <StyledLink>Wyloguj się</StyledLink>
    </StyledHeaderWrapper>
  );
};
