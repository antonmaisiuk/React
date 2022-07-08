import React, { ButtonHTMLAttributes, FC } from 'react';
import {
  StyledButton,
  StyledButtonAdd,
  StyledButtonTrash,
  StyledButtonEdit,
  StyledButtonAccept,
  StyledButtonRoute,
  StyledButtonSearch,
  StyledTextWithIcon,
} from './styled';
import { TrashIcon, AcceptIcon } from '../Icons';

export enum ButtonMode {
  text = 'text',
  edit = 'edit',
  delete = 'delete',
  add = 'add',
  accept = 'accept',
  search = 'search',
  route = 'route',
  logIn = 'logIn',
  signUp = 'signUp',
  deleteWithText = 'deleteWithText',
  acceptWithText = 'acceptWithText',
}

export interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonMode;
  isActive?: boolean;
}

export interface IPropsIconWithText
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  mode?: ButtonMode;
}

const TextWithIcon: FC<IPropsIconWithText> = ({
  className,
  mode,
  children,
}) => (
  <StyledTextWithIcon {...{ className }}>
    {mode === ButtonMode.deleteWithText && <TrashIcon />}
    {mode === ButtonMode.acceptWithText && <AcceptIcon />}
    <span>{children}</span>
  </StyledTextWithIcon>
);

// const renderButton = (mode, content, isActive) => {
//     switch (mode) {
//         case 'sideBar':
//         case 'login':
//         case 'register':
//             return <span>{content}</span>;
//         case 'add':
//             return  <StyledButtonAdd/>
//         default:
//             break;
//     }
// }

export const Button: FC<IPropsButton> = ({
  type = 'button',
  className,
  mode = ButtonMode.text,
  isActive = false,
  children,
  onClick,
}) => {
  return (
    <StyledButton {...{ mode, isActive, className, type, onClick }}>
      {
        {
          [ButtonMode.text]: <span>{children} </span>,
          [ButtonMode.logIn]: <span>{children}</span>,
          [ButtonMode.signUp]: <span>{children}</span>,
          [ButtonMode.add]: <StyledButtonAdd />,
          [ButtonMode.search]: <StyledButtonSearch />,
          [ButtonMode.delete]: <StyledButtonTrash />,
          [ButtonMode.route]: <StyledButtonRoute />,
          [ButtonMode.edit]: <StyledButtonEdit />,
          [ButtonMode.accept]: <StyledButtonAccept />,
          [ButtonMode.deleteWithText]: (
            <TextWithIcon {...{ mode }}>{children}</TextWithIcon>
          ),
          [ButtonMode.acceptWithText]: (
            <TextWithIcon {...{ mode }}>{children}</TextWithIcon>
          ),
        }[mode]
      }
    </StyledButton>
  );
};

// Button.PropTypes = {
//  content: PropTypes.string
// }

// Button.DefaultProps = {
//     content: ''
// }
