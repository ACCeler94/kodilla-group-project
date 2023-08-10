import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarRating from '../StarRating/StarRating';

const ProductBox = ({ name, price, promo, stars, userRating, imgSrc, oldPrice }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      {promo && <div className={styles.sale}>{promo}</div>}
      <img src={imgSrc} alt={name} />
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.starsWrapper}>
        <StarRating stars={stars} userRating={userRating} />
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        {// show discounted old price if it is given as a prop
        oldPrice ? <span className={styles.oldPrice}>${oldPrice}</span> : ''}
        <Button noHover variant='small' className={styles.priceContainer}>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  userRating: PropTypes.number,
  imgSrc: PropTypes.string,
  oldPrice: PropTypes.number,
};

export default ProductBox;
