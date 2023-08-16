import styles from './Brands.module.scss';
import React from 'react';
import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const Brands = props => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.brandsContainer}>
        <div className={styles.brandsLine}></div>
        <div className={styles.buttons}>
          <Button variant='small' className={styles.leftButton}>
            <FontAwesomeIcon icon={faLessThan} />
          </Button>
          <Button variant='small' className={styles.rightButton}>
            <FontAwesomeIcon icon={faGreaterThan} />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Brands;
