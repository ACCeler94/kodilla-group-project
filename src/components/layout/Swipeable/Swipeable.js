import React from 'react';
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';

const Swipeable = ({ children, leftAction, rightAction }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => leftAction(),
  });

  return <>{children}</>;
};

Swipeable.propTypes = {
  children: PropTypes.array,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;
