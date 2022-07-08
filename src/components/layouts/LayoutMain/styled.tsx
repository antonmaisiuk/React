import styled from 'styled-components';
import { StyledSidebarWrapper } from '../../Sidebar/styled';
import { Sidebar } from '../../Sidebar';

export const StyledMainWrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: linear-gradient(
    71.39deg,
    #dadada -2.42%,
    rgba(234, 234, 234, 0) 40.49%
  );

  padding: 40px 10% 0 10%;

  .main_sidebar {
    width: 20%;
  }
  .main_content {
    width: 75%;
  }
`;

export const StyledMain = styled.div`
  display: flex;
`;
