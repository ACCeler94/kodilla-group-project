import styles from './Brands.module.scss';
import React, { useState } from 'react';
import Swipeable from '../../views/Swipeable/Swipeable';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Brands = () => {
  const products = useSelector(state => state.products);
  const [activePage, setActivePage] = useState(0);

  const leftAction = () => {
    if (activePage !== pagesCount - 1) {
      setActivePage(activePage + 1);
    }
  };

  const rightAction = () => {
    if (activePage !== 0) {
      setActivePage(activePage - 1);
    }
  };

  const brandImages = products.map(product =>
    product.brand ? product.brand.img : null
  );

  const filteredBrandImages = brandImages.filter(imgSrc => imgSrc !== null);

  const pagesCount = Math.ceil(filteredBrandImages.length / 8);

  const rwd = {
    desktop: {
      breakpoint: { max: 2000, min: 1023 },
      items: 6,
      slidesToSlide: 6,
    },
    tablet: {
      breakpoint: { max: 1023, min: 769 },
      items: 5,
      slidesToSlide: 5,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 4,
      slidesToSlide: 4,
    },
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.carousel}>
          <Carousel
            responsive={rwd}
            infinite={true}
            transition='all .5'
            transitionDuration={300}
            containerClass='carousel'
          >
            {filteredBrandImages.map((img, index) => (
              <>
                <img key={index} src={img} alt={`Brand ${index}`} />
                <Swipeable leftAction={leftAction} rightAction={rightAction} />
              </>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default Brands;
