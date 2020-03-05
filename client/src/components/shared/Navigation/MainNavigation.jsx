import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDrawer } from '../../../redux/UI/UIActions';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import Drawer from './Drawer';
import Burger from './Burger';

import './MainNavigation.scss';

const MainNavigation = props => {
  const drawerIsOpen = useSelector(state => state.UIReducer.drawerIsOpen);

  const dispatch = useDispatch();

  return (
    <>
      <Drawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks onClick={() => dispatch(toggleDrawer())} />
        </nav>
      </Drawer>

      <MainHeader>
        <h1 className="main-navigation__title">
          <Link
            to="/"
            onClick={
              drawerIsOpen === true ? () => dispatch(toggleDrawer()) : null
            }
          >
            Phonehouse
          </Link>
        </h1>

        <Burger />

        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;

// what's between the opening and closing tags of MainHeader is passed as children prop to MainHeader
