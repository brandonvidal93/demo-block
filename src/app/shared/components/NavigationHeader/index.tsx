import * as React from 'react';
import { HeaderNav } from './styles';
import LogoDemo from 'assets/img/logo-demo.png';
import { NavBrand } from './NavBrand';
import { NavList } from './NavList';

export const NavigationHeader: React.FC = () => {
  const routes = [
    { label: 'Home', url: '/home' },
    { label: 'Productos', url: '/productos' },
  ];
  return (
    <HeaderNav>
      <NavBrand imgSrc={LogoDemo} text="Ceiba Software"></NavBrand>
      <NavList items={routes} />
    </HeaderNav>
  );
};
