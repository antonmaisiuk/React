import styled from 'styled-components';
import {
  AcceptIcon,
  AddIcon,
  EditIcon,
  SearchIcon,
  RouteIcon,
  TrashIcon,
} from '../Icons';
import { ButtonMode, IPropsButton } from './Button';

const getBackgroundColor = ({ mode, isActive }: IPropsButton): string => {
  switch (mode) {
    case ButtonMode.text:
      return (isActive && '#D03017') || '#fff';

    case ButtonMode.logIn:
    case ButtonMode.search:
    case ButtonMode.add:
      return '#DD3A21';

    case ButtonMode.signUp:
      return '#86382B';

    case ButtonMode.accept:
      return (isActive && '#90B348') || '#fff';
    default:
      return '#fff';
  }
};

const getButtonChildrenColor = ({ mode, isActive }: IPropsButton): string => {
  switch (mode) {
    case ButtonMode.text:
      return (isActive && `#ffffff`) || `#000000bf`;
    case ButtonMode.logIn:
    case ButtonMode.signUp:
    case ButtonMode.add:
    case ButtonMode.search:
    case ButtonMode.accept:
      return `#ffffff`;
    default:
      return 'inherit';
  }
};

const getButtonStyles = ({ mode }: IPropsButton): string => {
  switch (mode) {
    case ButtonMode.text:
      return `
        // width: 196px;
        height: 2rem;
        padding-left: 15px;  
        span{      
          text-align: left;
        }
      `;
    case ButtonMode.acceptWithText:
    case ButtonMode.deleteWithText:
      return `
        width: max-content; 
        height: 2rem;
        padding: 8px 10px;
        span{
          font-size: 12px;
        }
      `;
    case ButtonMode.logIn:
    case ButtonMode.signUp:
      return `
        width: 214px;
        height: 41px;
        font-weight: 700;
      `;
    case ButtonMode.add:
    case ButtonMode.search:
      return `
        width: 40px;
        height: 40px;        
      `;
    case ButtonMode.delete:
    case ButtonMode.edit:
    case ButtonMode.route:
    case ButtonMode.accept:
      return `
        width: 30px;
        height: 30px;
      `;
    default:
      return '';
  }
};

export const StyledButton = styled.button<IPropsButton>`
  min-width: 1.8rem;
  min-height: 1.8rem;
  position: relative;

  background-color: ${({ mode, isActive }) =>
    getBackgroundColor({ mode, isActive })};
  span {
    display: inline-block;
    width: 100%;
    text-align: center;
  }

  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  cursor: pointer;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${(props) => getButtonChildrenColor(props)};
  border: ${({ isActive }) => (!isActive && '1px solid #ECECEC') || 'none'};
  box-shadow: ${({ isActive }) =>
    (!isActive && '3px 3px 10px rgba(0, 0, 0, 0.05)') || 'none'};

  path {
    fill: ${({ isActive }) => (isActive && '#fff') || 'rgba(0, 0, 0, 0.75)'};
  }
  ${(props) => getButtonStyles(props)};

  &:hover {
    ${({ mode }) =>
      mode === ButtonMode.delete &&
      `background-color: #948b89; path{ fill: #fff}`};
    ${({ mode }) =>
      mode === ButtonMode.edit &&
      `background-color: #D03017; path{ fill: #fff}`};
  }
`;

export const StyledButtonAdd = styled(AddIcon)<IPropsButton>`
  height: auto;
`;
export const StyledButtonSearch = styled(SearchIcon)<IPropsButton>`
  height: auto;
`;

export const StyledButtonTrash = styled(TrashIcon)<IPropsButton>`
  width: 11.4px;
  height: auto;
`;

export const StyledButtonRoute = styled(RouteIcon)<IPropsButton>`
  height: auto;
`;

export const StyledButtonEdit = styled(EditIcon)<IPropsButton>`
  // path {
  //   fill: ${({ isActive }) => (isActive && '#fff') || 'rgba(0, 0, 0, 0.75)'};
  // }

  width: 13.8px;
  height: auto;
`;

export const StyledButtonAccept = styled(AcceptIcon)<IPropsButton>`
  // path {
  //   fill: ${({ isActive }) => !isActive && 'rgba(0, 0, 0, 0.75)'};
  // }

  width: 13.8px;
  height: auto;
`;

export const StyledTextWithIcon = styled.div<IPropsButton>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 400;
  width: 100%;
  svg {
    ${({ mode }) =>
      mode && mode === ButtonMode.acceptWithText && 'width: 1.5rem;'};
    ${({ mode }) =>
      mode && mode === ButtonMode.deleteWithText && 'width: 4rem;'};

    path {
      fill: #000000bf;
    }
    margin: 0 0.5rem;
  }
  span {
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #223c52;
  }
`;
