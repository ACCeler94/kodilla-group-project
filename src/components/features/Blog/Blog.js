import React from 'react';
import styles from './Blog.module.scss';
import BlogBox from '../../common/BlogBox/BlogBox';

const Blog = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.titleBar}>
          <div className='row no-gutters'>
            <div className={'col-auto ' + styles.header}>
              <h3>Latest blog</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a className={styles.active}>.</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          <BlogBox isActive={true} />
          <BlogBox />
          <BlogBox />
        </div>
      </div>
    </div>
  );
};

export default Blog;
