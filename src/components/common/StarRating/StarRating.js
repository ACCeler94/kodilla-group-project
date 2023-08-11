import React from 'react';
import PropTypes from 'prop-types';

import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { rateProduct } from '../../../redux/productsRedux';

const StarRating = ({ stars, userRating, id }) => {
  const dispatch = useDispatch();

  const handleRating = e => {
    e.preventDefault();
    const index = e.currentTarget.dataset.index;
    dispatch(rateProduct({ id, userRating: index }));
  };

  const checkUserRating = i => {
    if (userRating) {
      if (i <= userRating) {
        return <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>;
      } else {
        return <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>;
      }
    } else {
      if (i <= stars) {
        return <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>;
      } else {
        return <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>;
      }
    }
  };

  return (
    <div className={styles.root}>
      {[1, 2, 3, 4, 5].map(i => (
        <a
          key={i}
          href='#'
          data-index={i}
          className={userRating ? styles.userRated : ''}
          onClick={handleRating}
        >
          {checkUserRating(i)}
        </a>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  stars: PropTypes.number,
  userRating: PropTypes.number,
  id: PropTypes.string,
};

export default StarRating;
