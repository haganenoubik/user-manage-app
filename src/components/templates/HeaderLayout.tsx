import { FC, memo } from 'react';
import { Header } from '../layout/organisms/Header';
import { Outlet } from 'react-router-dom';

export const HeaderLayout: FC = memo(() => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
});
