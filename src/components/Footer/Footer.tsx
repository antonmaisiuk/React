import React, { FC, HTMLAttributes } from 'react';
import { StyledFooterDiv, StyledFooterWrapper } from './styled';

export const Footer: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <StyledFooterWrapper>
      <StyledFooterDiv>&copy; 2021</StyledFooterDiv>
    </StyledFooterWrapper>
  );
};
