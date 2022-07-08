import React, { FC, InputHTMLAttributes } from 'react';
import { StyledRadioInput, StyledRadioInputWrapper } from './styled';

export interface IPropsRadioInput
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | number;
  value?: string | number;
  isChecked?: boolean;
}

export const RadioInput: FC<IPropsRadioInput> = ({
  name,
  label,
  className,
  onChange,
  value = '',
  isChecked = false,
}) => {
  return (
    <StyledRadioInputWrapper {...{ className, isChecked }}>
      <StyledRadioInput
        {...{ onChange }}
        checked={isChecked}
        id={value.toString()}
      />
      <label htmlFor={value.toString()}>
        <span>{label}</span>
      </label>
    </StyledRadioInputWrapper>
  );
};
