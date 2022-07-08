import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../Header';
import { Sidebar } from '../../Sidebar';
import { StyledMain, StyledMainWrapper } from './styled';
import { Footer } from '../../Footer';

export const LayoutMain: FC = () => {
  return (
    <>
      <Header />
      <StyledMainWrapper className="main">
        <Sidebar className="main_sidebar" />
        <StyledMain className="main_content">
          <Outlet />
        </StyledMain>
      </StyledMainWrapper>
      <Footer />
    </>
  );
};
