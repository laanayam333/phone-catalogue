import React from 'react';

import { NavLink } from 'react-router-dom';

import './NavLinks.scss';

const NavLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" className="nav-links__link">
          Phones
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          data-cy="contact-link"
          className="nav-links__link"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
