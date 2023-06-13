import { nanoid } from 'nanoid';
import React from 'react';

import { NavEl, Link, Li } from './NavStyled';
const items = [
  {
    id: nanoid(),
    to: '/main',
    text: 'ПОСЛУГИ',
  },
  {
    id: nanoid(),
    to: '/about',
    text: 'ПРО НАС',
  },
  {
    id: nanoid(),
    to: '/contacts',
    text: 'КОНТАКТИ',
  },
];

const Nav = () => {
  const elements = items.map(({ id, to, text }) => (
    <Link key={id}>
      <Li to={to}>{text}</Li>
    </Link>
  ));
  return <NavEl>{elements}</NavEl>;
};

export default Nav;
