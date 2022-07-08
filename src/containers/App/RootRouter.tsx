import React, { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LayoutAuth } from '../../components/layouts';
import { LogIn } from '../auth/LogIn';
import { Confirm, SignUp } from '../auth/SignUp';

export const RootRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="auth/login" />} />
          <Route path="*" element={<Navigate to="auth/login" />} />
          <Route path="auth" element={<LayoutAuth />}>
            <Route index element={<Navigate to="login" />} />
            <Route path="*" element={<Navigate to="login" />} />
            <Route path="login" element={<LogIn />} />
            <Route path="signup">
              <Route index element={<SignUp />} />
              <Route path="confirm" element={<Confirm />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
