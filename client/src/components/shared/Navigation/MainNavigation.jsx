import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import Drawer from './Drawer';
import Burger from './Burger';

import './MainNavigation.scss';

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawerHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
    console.log(drawerIsOpen);
  };

  return (
    <>
      <Drawer
        drawerIsOpen={drawerIsOpen}
        toggleDrawerHandler={toggleDrawerHandler}
      >
        <nav className="main-navigation__drawer-nav">
          <NavLinks onClick={toggleDrawerHandler} />
        </nav>
      </Drawer>

      <MainHeader>
        <h1 className="main-navigation__title">
          <Link
            to="/"
            onClick={drawerIsOpen === true ? toggleDrawerHandler : null}
          >
            Phonehouse
          </Link>
        </h1>

        <Burger
          toggleDrawerHandler={toggleDrawerHandler}
          drawerIsOpen={drawerIsOpen}
        ></Burger>

        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;

// what's between the opening and closing tags of MainHeader is passed as children prop to MainHeader
