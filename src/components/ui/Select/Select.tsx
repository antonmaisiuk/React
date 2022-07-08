import React from 'react';
import ReactSelect, { GroupBase, Props, StylesConfig } from 'react-select';
import { Placeholder } from '../Placeholder';
import { StyledSelectWrapper } from './styled';
import { createStyles } from './config';

export interface IPropsSelect extends Props {
  externalPlaceholder: string;
  withHelp?: boolean;
}

export const Select: React.FC<IPropsSelect> = ({
  className,
  name,
  // children,
  // mode = SelectMode.select,
  isDisabled = false,
  noOptionsMessage = '',
  externalPlaceholder = '',
  placeholder = 'Wyberz',
  options,
  value,
  withHelp = false,
  defaultValue,
  onChange,
  isSearchable,
  ...props
}) => {
  const styles = createStyles({ externalPlaceholder });
  return (
    <StyledSelectWrapper {...{ externalPlaceholder, className }}>
      {externalPlaceholder && (
        <Placeholder
          externalPlaceholder={externalPlaceholder}
          {...{ withHelp }}
        />
      )}
      <ReactSelect
        {...{
          // mode,
          name,
          options,
          placeholder,
          externalPlaceholder,
          props,
          value,
          defaultValue,
          onChange,
          isSearchable,
          styles,
        }}
      />
    </StyledSelectWrapper>
  );
};
