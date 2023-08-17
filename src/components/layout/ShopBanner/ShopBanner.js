import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ShopBanner.module.scss';

const ShopBanner = () => {
  return (
    <div className={`col-12 ${styles.root}`}>
      <div className='container'>
        <div className={styles.banner}>
          <h3 className={styles.bannerTitle}>
            BEDROOM <span className={styles.titleHighlight}>FURNITURE</span>
          </h3>
          <h4 className={styles.bannerSubTitle}>
            ALWAYS <span className={styles.subTitleHighlight}>25%</span> OFF OR MORE
          </h4>
        </div>
        <div className={styles.bannerBreadcrumbContainer}>
          <div className={styles.bannerBreadcrumb}>
            <span>Home</span>
            <span className={styles.arrow}> &gt; </span>
            <span className={styles.active}>Furniture</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ShopBanner.propTypes = {};

export default ShopBanner;
