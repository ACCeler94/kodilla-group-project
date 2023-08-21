import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../features/Brands/Brands';
import DealsBanner from '../../layout/DealsBanner/DealsBanner';
import Promoted from '../../features/Promoted/Promoted';
import Gallery from '../../features/Gallery/Gallery';
import Chatbot from '../../layout/Chatbot/Chatbot';
import Blog from '../../features/Blog/Blog';
import Feedback from '../../features/Feedback/Feedback';
import StickyBar from '../../features/StickyBar/StickyBar';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <DealsBanner />
    <NewFurniture />
    <Gallery />
    <StickyBar />
    <Blog />
    <Brands />
    <Chatbot />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
