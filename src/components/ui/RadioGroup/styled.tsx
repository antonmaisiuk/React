import styled from 'styled-components';
import { IPropsRadioInput } from './RadioInput';

export const StyledRadioInputWrapper = styled.div<IPropsRadioInput>`
  input[type='checkbox'] {
    margin-right: 15px;
  }
`;

export const StyledRadioInput = styled.input.attrs({ type: 'radio' })`
  display: flex;
`;

export const StyledRadioGroupWrapper = styled.div<IPropsRadioInput>`
  display: flex;
`;
