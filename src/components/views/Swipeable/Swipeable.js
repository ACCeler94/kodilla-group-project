import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';

const Swipeable = ({ children, leftAction, rightAction }) => {
  const [paused, setPaused] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => leftAction(),
    onSwipedRight: () => rightAction(),
  });

  return (
    <div {...handlers} onMouseEnter={() => setPaused(true)}>
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.array,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;
