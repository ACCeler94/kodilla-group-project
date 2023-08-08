import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllComparableProducts,
  removeProductFromCompare,
} from '../../../redux/comparableProductsRedux';

import styles from './StickyBar.module.scss';

const StickyBar = () => {
  const selectedItems = useSelector(getAllComparableProducts);
  const isSomethingSelected = selectedItems.length > 0;
  const dispatch = useDispatch();

  const handleRemoveClick = productId => {
    dispatch(removeProductFromCompare(productId));
  };

  return (
    <>
      {isSomethingSelected && (
        <div className={styles.stickyBar}>
          {selectedItems.map(item => (
            <div key={item.id} className={styles.selectedProduct}>
              <img
                onClick={() => handleRemoveClick(item.id)}
                src={item.imgSrc}
                alt={item.name}
              />
              <button className={styles.buttonRemoveProduct}>X</button>
            </div>
          ))}
          <button className={styles.compareButton}>Compare</button>
        </div>
      )}
    </>
  );
};

export default StickyBar;
