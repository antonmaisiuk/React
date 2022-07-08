import styled from 'styled-components';
import { StyledSidebarWrapper } from '../../Sidebar/styled';
import { Sidebar } from '../../Sidebar';
import { AuthLogo } from '../../ui/Icons/LogoIcons';

export const StyledMainWrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: linear-gradient(
    71.39deg,
    #dadada -2.42%,
    rgba(234, 234, 234, 0) 40.49%
  );

  padding: 3.5rem 10%;

  .main_sidebar {
    width: 35%;
  }
  .main_content {
    width: 60%;
  }
`;
export const StyledSidebarAuth = styled.div`
  background: #dd3a21;
  padding: 1rem 0;
  max-height: 547px;
`;

export const StyledAuthLogo = styled(AuthLogo)`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
`;
