import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getAllFeedback } from '../../../redux/feedBackReducer';
import FeedBackDisp from './FeedBackDisp';
import React, { useState } from 'react';
import Swipeable from '../../views/Swipeable/Swipeable';

const Feedback = () => {
  const allFeedback = useSelector(getAllFeedback);

  const [activePage, setActivePage] = useState(0);

  const handlePageChange = newPage => {
    setActivePage(newPage);
  };

  const leftAction = () => {
    if (activePage !== allFeedback.length - 1) {
      setActivePage(activePage + 1);
    }
  };

  const rightAction = () => {
    if (activePage !== 0) {
      setActivePage(activePage - 1);
    }
  };

  const dots = [];
  for (let i = 0; i < allFeedback.length; i++) {
    dots.push(
      <li key={`dot-${i}`}>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage && styles.active}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className='container'>
      <div className='mb-5'>
        <div className='row'>
          <div className={'col-11 ' + styles.feedBck}>
            <h3>CLIENT FEEDBACK</h3>
          </div>
          <div className='col-1 p-0 mb-0 text-right'>
            <div className={styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        <div className='text-center mt-4 mb-4'>
          <FontAwesomeIcon
            className={styles.feedBckIcon}
            icon={faQuoteRight}
          ></FontAwesomeIcon>
        </div>
        <Swipeable leftAction={leftAction} rightAction={rightAction}>
          {allFeedback.map(fdback => (
            <FeedBackDisp key={fdback.id} {...fdback} activePage={activePage} />
          ))}
        </Swipeable>
      </div>
    </div>
  );
};

export default Feedback;
