import React, { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  ButtonMode,
  PageHeader,
  PageHeaderControls,
  Table,
} from '../../../components';
import { StyledPageHeader } from '../../cities/Cities/styled';

export const UserControls: FC = () => {
  const navigate = useNavigate();
  const cityId = useParams();

  return (
    <StyledPageHeader>
      <PageHeader title="Użytkownicy" />
      <PageHeaderControls secondGroup />
    </StyledPageHeader>
  );
};
