import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { addProductToCompare } from '../../../redux/comparableProductsRedux';
import { toggleFavorite } from '../../../redux/productsRedux';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  imgSrc,
  oldPrice,
  isFavorite,
  id,
}) => {
  const dispatch = useDispatch();
  function onAddToCompare(id, imgSrc) {
    dispatch(addProductToCompare({ id, imgSrc }));
  }

  const handleFavorite = e => {
    e.preventDefault();
    dispatch(toggleFavorite({ id, isFavorite: !isFavorite }));
  };

  return (
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
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            className={isFavorite ? styles.favorite : ''}
            onClick={handleFavorite}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            onClick={e => {
              e.preventDefault();
              onAddToCompare(id, imgSrc);
            }}
          >
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
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  imgSrc: PropTypes.string,
  oldPrice: PropTypes.number,
  isFavorite: PropTypes.bool,
};

export default ProductBox;
