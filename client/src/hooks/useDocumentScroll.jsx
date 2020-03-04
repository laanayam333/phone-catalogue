import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

function useDocumentScroll(callback) {
  // the first useState argument is blank.
  // we won’t actually be using that value because we will be grabbing the scrollTop directly.
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body;

    setScrollPosition(previousPosition => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    //we will pass a callback to the function so that it can return the scroll data back to the <Header /> component.
    callback({
      previousScrollTop,
      currentScrollTop
    });
  }

  //wrap handleDocumentScroll() inside of a throttle function so that it will fire at most every 250ms
  //throttle: Guaranteeing a constant flow of executions every X milliseconds. Checks every 250ms the scroll position to trigger an event.

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

  //useEffect hook has two purposes:
  //1) Registers the scroll event listener on < Header /> mount
  //2) Removes the event listener on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled);

    // the final empty array argument ensures that our useEffect hook only runs one time on mount (we only want to register the scroll listener once).
    // useEffect would run after every single render if we didn't provide this last empty array argument.
    // it is also possible to call it conditionally by passing the array some parameters
    return () =>
      window.removeEventListener('scroll', handleDocumentScrollThrottled);
  }, [handleDocumentScrollThrottled]);
}

export default useDocumentScroll;
