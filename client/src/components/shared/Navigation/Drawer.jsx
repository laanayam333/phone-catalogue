import React from 'react';
import ReactDom from 'react-dom';
import { useTransition, animated } from 'react-spring';

import './Drawer.scss';

const Drawer = ({ drawerIsOpen, children, toggleDrawerHandler }) => {
  const transitions = useTransition(drawerIsOpen, null, {
    from: {
      opacity: 0,
      transform: 'translateX(100%)',
      height: '100vh',
      width: '100vw',
      top: 0,
      background: '#A6A6A6',
      position: 'fixed'
    },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%)' }
  });

  const content = transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props} onClick={toggleDrawerHandler}>
          {children}
        </animated.div>
      )
  );

  return ReactDom.createPortal(content, document.getElementById('drawer-hook'));
};

export default Drawer;
