import styled from 'styled-components';
import { StylesConfig } from 'react-select';
import { IPropsSelect } from './Select';

export const StyledSelectWrapper = styled.div<IPropsSelect>`
  width: 100%;

  display: flex;

  flex-direction: row;
  .externalPlaceholder {
    width: 20.2%;
    max-width: 169px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: 14px;
    background-color: #ececec;
    border-radius: 8px 0 0 8px;

    p {
      margin: 0;
      margin-left: 1rem;
    }
    span {
      margin-right: 0.5rem;
    }
  }
`;

// export const StyledSelect: StylesConfig = {
//   container: (styles) => ({ ...styles, width: '100%' }),
//   control: (styles) => ({
//     ...styles,
//     width: '100%',
//     height: '2.5rem',
//     cursor: 'pointer',
//     boxShadow: 'none',
//     border: '1px solid #ececec',
//     backgroundColor: '#f8f8f8',
//     // ${({externalPlaceholder})=> (exter)}
//     borderRadius: (externalPlaceholder && '0 0.5rem 0.5rem 0') || '0.5rem',
//     '&:hover': {
//       borderColor: '#ececec',
//     },
//     '&:active': {
//       borderColor: '#ececec',
//     },
//   }),
//   option: (styles, { isSelected }) => ({
//     ...styles,
//     paddingLeft: '1rem',
//     backgroundColor: '#ffffff',
//     textAlign: 'left',
//     cursor: 'pointer',
//     color: `${(isSelected && 'gray') || 'black'}`,
//     '&:hover': { backgroundColor: '#ffffff' },
//   }),
//   valueContainer: (styles) => ({
//     ...styles,
//     textAlign: 'left',
//     paddingLeft: '1rem',
//     color: '#000000bf',
//   }),
//   singleValue: (styles) => ({ ...styles, margin: 0 }),
//   dropdownIndicator: (styles, { selectProps }) => ({
//     ...styles,
//     transform: `rotate(${(selectProps.menuIsOpen && '180deg') || '0deg'})`,
//     transition: 'all 0.2s',
//     color: '#000000bf',
//   }),
//   indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
// };
