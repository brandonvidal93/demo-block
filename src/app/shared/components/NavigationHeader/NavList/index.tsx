import * as PropTypes from 'prop-types';
import * as React from 'react';
import { NavListLi, NavListUl } from './styles';
import { NavItem } from '../NavItem';

interface NavListProps {
  items: { label: string; url: string }[];
}

export const NavList: React.FC<NavListProps> = ({ items }) => {
  return (
    <NavListUl>
      {items.map(({ label, url }) => (
        <NavListLi key={label}>
          <NavItem label={label} to={url} />
        </NavListLi>
      ))}
    </NavListUl>
  );
};

NavList.propTypes = {
  items: PropTypes.array.isRequired,
};
