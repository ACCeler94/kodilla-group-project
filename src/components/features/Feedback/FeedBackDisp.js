import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

const FeedBackDisp = ({ opinion, photo, name, shortDescription }) => {
  return (
    <>
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
    </>
  );
};

export default FeedBackDisp;

FeedBackDisp.propTypes = {
  opinion: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  shortDescription: PropTypes.string,
};

