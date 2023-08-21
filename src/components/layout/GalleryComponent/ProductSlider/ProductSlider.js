import React, { useState } from 'react';
import styles from './ProductSlider.module.scss';
import Button from '../../../common/Button/Button';
import Swipeable from '../../../views/Swipeable/Swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ProductSlider = ({ topProduct }) => {
  const [activePage, setActivePage] = useState(0);

  const leftAction = () => {
    if (activePage !== pagesCount - 1) {
      setActivePage(activePage + 1);
    }
  };

  const rightAction = () => {
    if (activePage !== 0) {
      setActivePage(activePage - 1);
    }
  };

  const pagesCount = Math.ceil(topProduct.length / 8);

  return (
    <div className={'row no-gutters ' + styles.sliderColumn}>
      <Button variant='small' className={styles.rightButton}>
        <FontAwesomeIcon icon={faLessThan} className={styles.brandIcon} />
      </Button>
      {topProduct.slice(0, 6).map(img => (
        <div className={'col ' + styles.product} key={img.image}>
          <Swipeable leftAction={leftAction} rightAction={rightAction} />
        </div>
      ))}
      <Button variant='small' className={styles.rightButton}>
        <FontAwesomeIcon icon={faGreaterThan} className={styles.brandIcon} />
      </Button>
    </div>
  );
};

ProductSlider.propTypes = {
  topProduct: PropTypes.node,
};

export default ProductSlider;
