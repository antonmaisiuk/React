import styled from 'styled-components';
import { IPropsUserInfo } from './UserInfo';

export const StyledUserInfo = styled.div<IPropsUserInfo>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    max-width: 100px;
    margin: 0;
    margin-left: 17px;

    text-transform: uppercase;
    text-align: left;
    color: #d03017;
  }
  svg {
    width: 100%;
  }
  span {
    width: 39px;
    //fill: rgba(208, 48, 23, 1);
  }
`;
