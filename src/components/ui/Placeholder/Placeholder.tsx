import React from 'react';
import { QuestionIcon } from '../Icons';
import { StyledPlaceholder } from './styled';

export interface IPropsPlaceholder {
  externalPlaceholder: string;
  withHelp?: boolean;
}

export const Placeholder: React.FC<IPropsPlaceholder> = ({
  externalPlaceholder,
  withHelp = false,
}) => {
  return (
    <StyledPlaceholder
      className="externalPlaceholder"
      externalPlaceholder={externalPlaceholder}
      withHelp
    >
      <p>{externalPlaceholder}</p>
      {withHelp && (
        <span>
          <QuestionIcon />
        </span>
      )}
    </StyledPlaceholder>
  );
};
