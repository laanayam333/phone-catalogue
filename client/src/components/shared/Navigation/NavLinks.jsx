import React from 'react';

import { NavLink } from 'react-router-dom';

import './NavLinks.scss';

const NavLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Phones</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
