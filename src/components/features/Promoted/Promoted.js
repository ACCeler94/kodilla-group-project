import React, { useEffect, useState } from 'react';
import styles from './Promoted.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { useSelector } from 'react-redux';
import { getAll, getPromoted } from '../../../redux/productsRedux';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import FadeIn from 'react-fade-in/lib/FadeIn';

const Promoted = () => {
  /* This selector is only to display picture for presentation into right column */
  const picForPresentation = useSelector(getAll);

  const promotedProducts = useSelector(getPromoted);

  const [dealsActivePage, setDealsActivePage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [presentationActivePage, setPresentationActivePage] = useState(0);

  // change active page every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setDealsActivePage(prevIndex => (prevIndex === 2 ? 0 : prevIndex + 1));
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  // pause autoplay for 7 (+ 3 from usual delay) seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPaused(false);
    }, 7000);
    return () => clearTimeout(timeout);
  }, [paused]);

  const pagesCount = 3;
  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={`dot-${i}`}>
        <a
          onClick={() => {
            setDealsActivePage(i);
            setPaused(true);
          }}
          className={i === dealsActivePage && styles.active}
        >
          page {i}
        </a>
      </li>
    );
  }

  const handlePresentationItemChange = direction => {
    if (direction === 'right') {
      if (presentationActivePage < presentationItems.length - 1) {
        setPresentationActivePage(presentationActivePage + 1);
      } else {
        setPresentationActivePage(0);
      }
    } else if (direction === 'left') {
      if (presentationActivePage > 0) {
        setPresentationActivePage(presentationActivePage - 1);
      } else {
        setPresentationActivePage(presentationItems.length - 1);
      }
    }
  };

  const presentationItems = [
    <div key={1} className={styles.presentationItemContainer}>
      <FadeIn>
        <div className={styles.presentationItem}>
          <img
            className={styles.promPic}
            src={picForPresentation[7].imgSrc}
            alt='armchair'
          />
          <div className={styles.innerBelt}>
            <h1 className={styles.beltTitl}>
              INDOOR <strong>FURNITURE</strong>
            </h1>
            <h5 className={styles.beltTitl}>SAVE UP TO 50% OF ALL FURNITURE</h5>
          </div>
          <Button variant='outline' className={styles.promButt}>
            SHOP NOW
          </Button>
        </div>
      </FadeIn>
    </div>,
    <div key={2} className={styles.presentationItemContainer}>
      <FadeIn>
        <div className={styles.presentationItem}>
          <img
            className={styles.promPic}
            src={picForPresentation[5].imgSrc}
            alt='furniture'
          />
          <div className={styles.innerBelt}>
            <h1 className={styles.beltTitl}>
              BEST DESIGNER <strong>BRANDS</strong>
            </h1>
            <h5 className={styles.beltTitl}>SAVE UP TO 50% OF ALL FURNITURE</h5>
          </div>
          <Button variant='outline' className={styles.promButt}>
            SHOP NOW
          </Button>
        </div>
      </FadeIn>
    </div>,
  ];

  return (
    <div className={styles.root}>
      <div className='container mt-4'>
        <div className='row text-center'>
          <div className='col-4 position-relative '>
            <div className={'row ' + styles.hotDiv}>
              <div className='col text-left'>
                <p>HOT DEALS</p>
              </div>
              <div className={'col text-right ' + styles.dots}>
                <ul className={styles.dotsWrapper}>{dots}</ul>
              </div>
            </div>
            <div className={styles.timer}>
              <div>
                <Button variant='outline' className={styles.cartBut}>
                  <FontAwesomeIcon
                    icon={faShoppingBasket}
                    className={'mr-2 ' + styles.butIcon}
                  ></FontAwesomeIcon>
                  ADD TO CART
                </Button>
              </div>
              <div className='row justify-content-center mt-5'>
                <div className={'col-3 ' + styles.circleTim}>
                  <p>25 DAYS</p>
                </div>
                <div className={'col-3 ' + styles.circleTim}>
                  <p>10 HR</p>
                </div>
                <div className={'col-3 ' + styles.circleTim}>
                  <p>45 MIN</p>
                </div>
                <div className={'col-3 ' + styles.circleTim}>
                  <p>30 SEC</p>
                </div>
              </div>
            </div>
            <div className={styles.hotDealsCarouselWrapper}>
              <ul className={styles.hotDealsCarouselContainer}>
                {promotedProducts
                  .slice(dealsActivePage, dealsActivePage + 1)
                  .map(product => {
                    return (
                      <li key={product.id}>
                        <FadeIn>
                          <ProductBox {...product} />
                        </FadeIn>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className='col-8 position-relative p-0'>
            {presentationItems.slice(
              presentationActivePage,
              presentationActivePage + 1
            )}
            <div className='row'>
              <div className='col pr-0 '>
                <Button
                  noHover
                  variant='outline'
                  className={styles.arrLe}
                  onClick={() => handlePresentationItemChange('left')}
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className={styles.butIcon}
                  ></FontAwesomeIcon>
                </Button>
              </div>
              <div className='col pl-0'>
                <Button
                  noHover
                  variant='outline'
                  className={styles.arrLe}
                  onClick={() => handlePresentationItemChange('right')}
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={styles.butIcon}
                  ></FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;

Promoted.propTypes = {
  products: PropTypes.array,
};
