import { GroupBase, StylesConfig } from 'react-select';
import { IPropsSelect } from './Select';

export const createStyles = ({
  externalPlaceholder,
}: IPropsSelect): StylesConfig<unknown, boolean, GroupBase<unknown>> => ({
  container: (styles) => ({ ...styles, width: '100%' }),
  control: (styles) => ({
    ...styles,
    width: '100%',
    height: '2.5rem',
    cursor: 'pointer',
    fontSize: '14px',
    boxShadow: 'none',
    border: '1px solid #ececec',
    // color: '#8A8A8F',
    backgroundColor: '#f8f8f8',
    borderRadius: (externalPlaceholder && '0 0.5rem 0.5rem 0') || '0.5rem',
    '&:hover': {
      borderColor: '#ececec',
    },
    '&:active': {
      borderColor: '#ececec',
    },
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    paddingLeft: '1rem',
    backgroundColor: '#ffffff',
    textAlign: 'left',
    cursor: 'pointer',
    color: `${(isSelected && 'gray') || 'black'}`,
    '&:hover': { backgroundColor: '#ffffff' },
  }),
  valueContainer: (styles) => ({
    ...styles,
    textAlign: 'left',
    paddingLeft: '1rem',
    color: '#000000bf',
  }),
  singleValue: (styles) => ({ ...styles, margin: 0 }),
  dropdownIndicator: (styles, { selectProps }) => ({
    ...styles,
    transform: `rotate(${(selectProps.menuIsOpen && '180deg') || '0deg'})`,
    transition: 'all 0.2s',
    color: '#000000bf',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: '#8A8A8F',
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
});
