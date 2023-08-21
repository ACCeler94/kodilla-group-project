import React from 'react';
import styles from './BlogBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faComments } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const BlogBox = ({ isActive }) => {
  return (
    <article className={styles.blogBox}>
      <div className={styles.root}>
        <div className={styles.blogImages}>
          <div className={styles.blogInfo}>
            <div>
              <FontAwesomeIcon icon={faCalendarDay} className={styles.calendar} />
              <span>&nbsp; 15 JAN 2016</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faComments} />
              <span>&nbsp; 4 Comments</span>
            </div>
          </div>
        </div>
        <div className={styles.blogButton}>
          <div className={styles.content}>
            <h3 className={isActive ? styles.activeText : ''}>
              Products That Fight Static
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud.
            </p>
          </div>
          <div>
            <button
              className={`${styles.button} ${isActive ? styles.activeButton : ''}`}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

BlogBox.propTypes = {
  isActive: PropTypes.string,
};

export default BlogBox;
