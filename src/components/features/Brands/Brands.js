import styles from './Brands.module.scss';
import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Swipeable from '../../views/Swipeable/Swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Brands = () => {
  const products = useSelector(state => state.products);
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

  const brandImages = products.map(product =>
    product.brand ? product.brand.img : null
  );

  const filteredBrandImages = brandImages.filter(imgSrc => imgSrc !== null);

  const pagesCount = Math.ceil(filteredBrandImages.length / 8);

  return (
    <div className={styles.root}>
      <div className='container'>
        <p className={styles.brandsLine}></p>
        <div className={styles.brandImages}>
          <Button variant='small' className={styles.leftButton}>
            <FontAwesomeIcon icon={faLessThan} className={styles.brandIcon} />
          </Button>{' '}
          {filteredBrandImages.map((img, index) => (
            <>
              <img key={index} src={img} alt={`Brand ${index}`} />
              <Swipeable leftAction={leftAction} rightAction={rightAction} />
            </>
          ))}
          <Button variant='small' className={styles.rightButton}>
            <FontAwesomeIcon icon={faGreaterThan} className={styles.brandIcon} />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Brands;
