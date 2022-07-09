import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonMode,
  PageHeader,
  PageHeaderControls,
  Table,
} from '../../../components';
import { StyledPageHeader } from '../../cities/Cities/styled';

type TRowsTable = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profile: React.ReactNode;
};

export const Users: FC = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState<TRowsTable[]>([
    {
      id: '1',
      firstName: 'Jan',
      lastName: 'Warszawa',
      email: 'adresemail@gmail.com',
      profile: 'Profil 1',
    },
    {
      id: '2',
      firstName: 'Jan',
      lastName: 'Warszawa',
      email: 'adresemail@gmail.com',
      profile: 'Profil 1',
    },
    {
      id: '3',
      firstName: 'Jan',
      lastName: 'Warszawa',
      email: 'adresemail@gmail.com',
      profile: 'Profil 1',
    },
  ]);
  const columns = [
    { Header: 'Imię', accessor: 'firstName' },
    { Header: 'Nazwisko', accessor: 'lastName' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Profil', accessor: 'profile' },
    { Header: '', accessor: 'buttons' },
  ];
  const data = rows.map(({ id, email, profile, firstName, lastName }) => ({
    firstName,
    lastName,
    email,
    profile,
    buttons: (
      <Button mode={ButtonMode.edit} onClick={() => navigate(`${id}/edit`)} />
    ),
  }));

  return (
    <>
      <StyledPageHeader>
        <PageHeader title="Użytkownicy" />
        <PageHeaderControls secondGroup onClickAdd={() => navigate('add')} />
      </StyledPageHeader>

      <Table
        className="cities_table"
        controlBtn
        columns={columns}
        data={data}
      />
    </>
  );
};
