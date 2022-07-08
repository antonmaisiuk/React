import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HeaderLogo } from '../ui/Icons/LogoIcons';

export const StyledHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 10%;
  height: 110px;

  border-bottom: 1px solid rgba(244, 244, 244, 1);
`;
export const StyledLink = styled.a`
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 26px;
`;
