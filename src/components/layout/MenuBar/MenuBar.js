import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={'row align-items-center ' + styles.menuBarWrapper}>
        <div className={'col ' + styles.ProductSearchWrapper}>
          <ProductSearch />
        </div>
        <input id='dropdown' className={styles.inputBox} type='checkbox' />

        <label htmlFor='dropdown' className={styles.dropdown}>
          <span className={styles.hamburger}>
            <span className={`${styles.iconBar} ${styles.topBar}`}></span>
            <span className={`${styles.iconBar} ${styles.middleBar}`}></span>
            <span className={`${styles.iconBar} ${styles.bottomBar}`}></span>
          </span>
        </label>
        <div className={'col-auto ' + styles.menu}>
          <ul className={styles.menuList}>
            <li>
              <a href='#' className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href='#'>Furniture</a>
            </li>
            <li>
              <a href='#'>Chair</a>
            </li>
            <li>
              <a href='#'>Table</a>
            </li>
            <li>
              <a href='#'>Sofa</a>
            </li>
            <li>
              <a href='#'>Bedroom</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
