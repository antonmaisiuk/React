import styled from 'styled-components';
import { SearchIcon } from '../Icons';
import { IInputProps, InputMode } from './Input';

export const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem;
  display: flex;
  //align-items: center;
`;
export const StyledInput = styled.input<IInputProps>`
  width: 100%;
  //height: 2.5rem;

  padding: ${({ mode }) =>
    (mode === InputMode.search && '0 2.5rem 0 1rem') || '0 1rem 0 1rem'};

  background: #f8f8f8;
  border: 1px solid #ececec;
  border-radius: ${({ externalPlaceholder }) =>
    (externalPlaceholder && '0 0.5rem 0.5rem 0') || '0.5rem'};
  outline: none;

  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: #8a8a8f;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  width: 0.88rem;
  height: auto;
  top: 0.77rem;
  right: 1rem;
  fill: #8a8a8f;
`;
