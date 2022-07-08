import styled from 'styled-components';
import { IPropsPlaceholder } from './Placeholder';

export const StyledPlaceholder = styled.div<IPropsPlaceholder>`
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
`;
