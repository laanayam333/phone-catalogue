import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useSpring, animated } from 'react-spring';

import { toggleDrawer } from '../../../redux/UI/UIActions';

import './Burger.scss';

const Burger = () => {
  const drawerIsOpen = useSelector(state => state.UIReducer.drawerIsOpen);

  const dispatch = useDispatch();

  const first = useSpring({
    transform: drawerIsOpen
      ? 'translate(5px, 32px) rotate(-45deg)'
      : 'translate(2px, 7px) rotate(0deg)'
  });
  const second = useSpring({
    transform: drawerIsOpen
      ? 'translate(10px, 4px) rotate(45deg)'
      : 'translate(2px, 19px) rotate(0deg)'
  });
  const third = useSpring({
    transform: drawerIsOpen
      ? 'translate(5px, 32px) rotate(-45deg)'
      : 'translate(2px, 31px) rotate(0deg)'
  });

  return (
    <div className="burger" data-cy="burger-menu">
      <svg
        onClick={() => dispatch(toggleDrawer())}
        width="40"
        height="32"
        viewBox="0 0 44 44"
        fill="#0d0d0d"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.rect width="40" height="4" rx="2" style={first} />
        <animated.rect width="40" height="4" rx="2" style={second} />
        <animated.rect width="40" height="4" rx="2" style={third} />
      </svg>
    </div>
  );
};

export default Burger;
