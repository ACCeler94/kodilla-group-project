import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import clsx from 'clsx';

const FeedBackDisp = ({ opinion, photo, name, shortDescription, activePage, id }) => {
  return (
    <div className={clsx(styles.showActive, id === activePage + 1 && styles.active)}>
      <div className='w-75 text-center m-auto'>
        <p>{opinion}</p>
      </div>
      <div className='row w-50 mx-auto mt-4'>
        <div className={'col text-right ' + styles.fbImg}>
          <img src={photo} alt={name} />
        </div>
        <div className='col text-left'>
          <h5>{name}</h5>
          <p className='text-muted'>{shortDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackDisp;

FeedBackDisp.propTypes = {
  opinion: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  shortDescription: PropTypes.string,
  activePage: PropTypes.number,
  id: PropTypes.number,
};
