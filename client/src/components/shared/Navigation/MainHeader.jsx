import React, { useState } from 'react';

import useDocumentScroll from '../../../hooks/useDocumentScroll';

import './MainHeader.scss';

const MainHeader = ({ children }) => {
  const [hideHeader, setHideHeader] = useState(false);
  // const [showShadow, setShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 250;

  useDocumentScroll(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    // setShowShadow(currentScrollTop > 2);
    setTimeout(() => {
      setHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  // const shadowStyle = showShadow ? 'shadow' : '';
  const hiddenStyle = hideHeader ? 'hidden' : '';

  return (
    // <header className={`main-header ${hiddenStyle} ${shadowStyle}`}>
    <header className={`main-header ${hiddenStyle}`}>{children}</header>
  );
};

export default MainHeader;
