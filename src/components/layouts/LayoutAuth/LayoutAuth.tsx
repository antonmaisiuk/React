import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../Header';
import {
  StyledSidebarAuth,
  StyledAuthLogo,
  StyledMain,
  StyledMainWrapper,
} from './styled';
import { Footer } from '../../Footer';

export const LayoutAuth: FC = () => {
  return (
    <>
      <Header />
      <StyledMainWrapper className="main_auth">
        <StyledSidebarAuth className="main_sidebar">
          <StyledAuthLogo />
        </StyledSidebarAuth>
        <StyledMain className="main_content">
          <Outlet />
        </StyledMain>
      </StyledMainWrapper>
      <Footer />
    </>
  );
};
