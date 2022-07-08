import styled from 'styled-components';
import { SidebarLogo } from '../ui/Icons/LogoIcons';

export const StyledSidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-width: 135px;

  div {
    margin-bottom: 18px;
  }

  button {
    margin-bottom: 13px;
    //&:last-child {
    //  margin-bottom: 0;
    //}
  }
`;

export const StyledSidebarLogo = styled(SidebarLogo)`
  //margin-top: 4rem;
  width: 100%;
  height: auto;
`;
