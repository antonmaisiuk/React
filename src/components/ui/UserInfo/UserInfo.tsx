import React, { FC, HtmlHTMLAttributes } from 'react';
import { StyledUserInfo } from './styled';
import { UserLogoIcon } from '../Icons';

export interface IPropsUserInfo extends HtmlHTMLAttributes<HTMLDivElement> {
  userName?: string;
}

export const UserInfo: FC<IPropsUserInfo> = ({
  userName = 'Nazwa użytkownika',
  className,
}) => {
  return (
    <StyledUserInfo {...{ className }}>
      <span>
        <UserLogoIcon />
      </span>
      <p>{userName}</p>
    </StyledUserInfo>
  );
};
