import React, { useState } from 'react';
import {
  Button,
  ButtonMode,
  Input,
  InputMode,
  Select,
  UserInfo,
  Table,
  AddIcon,
} from '../../components';
import { RootRouter } from './RootRouter';
import './App.css';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LayoutMain } from '../../components/layouts/LayoutMain/LayoutMain';
import { LayoutAuth } from '../../components/layouts';

// import { SelectMode } from './components/ui/Select/Select';
// import {  } from './components/ui/UserInfo';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('chocolate');

  const data = React.useMemo(
    () => [
      {
        check: <input type="checkbox" value="true" />,
        imie: 'Anton',
        nazwisko: 'Maisiuk',
        email: 'mail@gmail.com',
        profil: 'Profil 1',
        btn: (
          <div className="table_button-group">
            <Button mode={ButtonMode.delete} isActive={false} />
            <Button mode={ButtonMode.edit} isActive={false} />
            <Button mode={ButtonMode.route} isActive={false} />
          </div>
        ),
      },
      {
        check: <input type="checkbox" value="true" />,
        imie: 'Anton',
        nazwisko: 'Maisiuk',
        email: 'mail@gmail.com',
        profil: 'Profil 1',
        btn: <Button mode={ButtonMode.accept} isActive />,
      },
      {
        check: <input type="checkbox" value="true" />,
        imie: 'Anton',
        nazwisko: 'Maisiuk',
        email: 'mail@gmail.com',
        profil: 'Profil 1',
        btn: <Button mode={ButtonMode.accept} isActive />,
      },
      {
        check: <input type="checkbox" value="true" />,
        imie: 'Anton',
        nazwisko: 'Maisiuk',
        email: 'mail@gmail.com',
        profil: 'Profil 1',
        btn: <Button mode={ButtonMode.accept} isActive />,
      },
      {
        check: <input type="checkbox" value="true" />,
        imie: 'Anton',
        nazwisko: 'Maisiuk',
        email: 'mail@gmail.com',
        profil: 'Profil 1',
        btn: <Button mode={ButtonMode.accept} isActive />,
      },
    ],
    [],
  );
  const columns = React.useMemo(
    () => [
      {
        Header: <input type="checkbox" value="true" checked />,
        accessor: 'check',
      },
      {
        Header: 'Imię',
        accessor: 'imie',
      },
      {
        Header: 'Nazwisko',
        accessor: 'nazwisko',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Profil',
        accessor: 'profil',
      },
      {
        Header: '',
        accessor: 'btn',
      },
    ],
    [],
  );
  return (
    <div className="App">
      {/* <PageHeader title={"Użytkownik"} descript={"Aga"}/> */}
      {/* <hr/> */}
      {/* <UserInfo userName="Anton Maisiuk" />
      <hr />
      <Button mode={ButtonMode.text} isActive>
        Miasta
      </Button>
      <Button mode={ButtonMode.text} isActive={false}>
        Miasta
      </Button>
      <hr />

      <Button mode={ButtonMode.logIn} isActive>
        Zaloguj się
      </Button>
      <hr />
      <Button mode={ButtonMode.signUp} isActive>
        Zarejestruj się
      </Button>
      <hr />
      <Button mode={ButtonMode.add} isActive />
      <Button mode={ButtonMode.search} isActive />
      <hr />
      <Button mode={ButtonMode.delete} isActive={false} />
      <Button mode={ButtonMode.edit} isActive={false} />
      <Button mode={ButtonMode.acceptWithText} isActive={false}>
        Akceptuj zaznaczone
      </Button>
      <Button mode={ButtonMode.deleteWithText} isActive={false}>
        Usuń zaznaczone
      </Button>
      <hr />
      <div>
        <Input mode={InputMode.search} placeholder="Szukaj" />
        <Input
          mode={InputMode.default}
          externalPlaceholder="Typ pojazdu"
          placeholder="Nazwa profilu"
          withHelp
        />
      </div>
      <hr />
      <Select
        defaultValue={selectedOption}
        placeholder="Wpisz nazwe"
        externalPlaceholder="Typ pojazdu"
        options={options}
      />
      <Select
        defaultValue={selectedOption}
        externalPlaceholder=""
        options={options}
      />
      <hr />
      <Table className="table" columns={columns} data={data} controlBtn /> */}

      {/* <Header />
      <Sidebar className="sidebar" />
      <Footer /> */}

      {/* <LayoutAuth /> */}
      <RootRouter />
    </div>
  );
};
