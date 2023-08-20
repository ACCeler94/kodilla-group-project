import React from 'react';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getAllFeedback } from '../../../redux/feedBackReducer';
import FeedBackDisp from './FeedBackDisp';

const Feedback = () => {
  const allFeedback = useSelector(getAllFeedback);

  return (
    <div className='container'>
      <div className='mb-5'>
        <div className='row'>
          <div className={'col-11 ' + styles.feedBck}>
            <h3>CLIENT FEEDBACK</h3>
          </div>
          <div className='col-1 p-0 mb-0 text-right'>
            <div className={styles.dots}>
              <ul>
                <li>
                  <a>page</a>
                  <a>page</a>
                  <a>page</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='text-center mt-4 mb-4'>
          <FontAwesomeIcon
            className={styles.feedBckIcon}
            icon={faQuoteRight}
          ></FontAwesomeIcon>
        </div>
        {allFeedback.map(fdback => (
          <FeedBackDisp key={fdback.id} {...fdback} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;