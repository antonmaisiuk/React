import React, { FC, HTMLAttributes } from 'react';
import {
  StyledSidebarWrapper,
  StyledSidebarLogo,
  StyledSidebar,
} from './styled';
import { Button, ButtonMode, UserInfo } from '../ui';

export const Sidebar: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <StyledSidebarWrapper {...{ className }}>
      <StyledSidebar>
        <UserInfo userName="Nazwa użytkownika" className="sidebar_user-info" />
        <Button mode={ButtonMode.text} isActive>
          Miasta
        </Button>
        <Button mode={ButtonMode.text}>Użytkownicy</Button>
        <Button mode={ButtonMode.text}>Nowi użytkownicy</Button>
        <Button mode={ButtonMode.text}>Nadajniki</Button>
        <Button mode={ButtonMode.text}>Pojazdy</Button>
        <Button mode={ButtonMode.text}>Przystanki</Button>
        <Button mode={ButtonMode.text}>Rozkład jazdy</Button>
        <Button mode={ButtonMode.text}>Linie</Button>
      </StyledSidebar>
      <StyledSidebarLogo className="sidebar_logo" />
    </StyledSidebarWrapper>
  );
};
