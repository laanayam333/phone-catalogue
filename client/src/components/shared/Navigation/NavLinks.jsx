import React from 'react';

import { NavLink } from 'react-router-dom';

import './NavLinks.scss';

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li data-cy="contact-link" data-cy="phones-link">
        <NavLink to="/" className="nav-links__link">
          Phones
        </NavLink>
      </li>
      <li data-cy="contact-link">
        <NavLink to="/contact" className="nav-links__link">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
