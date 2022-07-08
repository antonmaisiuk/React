import React, { HTMLAttributes, InputHTMLAttributes } from 'react';
import { StyledInput, StyledInputWrapper, StyledSearchIcon } from './styled';
import { Placeholder } from '../index';

export enum InputMode {
  default = 'default',
  search = 'search',
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  mode?: InputMode;
  placeholder?: string;
  externalPlaceholder?: string;
  withHelp?: boolean;
}

export const Input: React.FC<IInputProps> = ({
  name,
  value,
  className,
  placeholder = '',
  externalPlaceholder = '',
  disabled,
  withHelp,
  mode = InputMode.default,
}) => (
  <StyledInputWrapper {...{ className }}>
    {externalPlaceholder && (
      <Placeholder
        externalPlaceholder={externalPlaceholder}
        {...{ withHelp }}
      />
    )}
    <StyledInput
      {...{ mode, externalPlaceholder, placeholder, name, value, disabled }}
    />
    {mode === InputMode.search && <StyledSearchIcon />}
  </StyledInputWrapper>
);

export default Input;
