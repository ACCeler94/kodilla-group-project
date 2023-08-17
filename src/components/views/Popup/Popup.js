import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup } from '../../../redux/popupRedux';

// import {
//   getAllComparableProducts,
//   removeProductFromCompare,
// } from '../../../redux/comparableProductsRedux';

import styles from './Popup.module.scss';

const Popup = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.popupIsOpen);

  const closeHandler = () => {
    dispatch(closePopup());
  };
  if (!isOpen) {
    return null; // Nie renderuj popupa, jeśli nie jest otwarty
  }

  return (
    <div className='popup-overlay'>
      <div className='popup-content'>
        {'popup'}
        <button onClick={closeHandler}>Zamknij</button>
      </div>
    </div>
  );
};

export default Popup;
