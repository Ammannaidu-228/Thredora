import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../../../Card/HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import './HomeSectionCardCarousel.css'; // Make sure the path is correct
import { useRef } from 'react';
import PropTypes from 'prop-types';

function HomeSectionCardCarousel({ data, sectionName }) {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.3 },
  };
  const carouselRef = useRef(null);

  const items = data.slice(0, 15).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));



  return (
    <div className="relative px-4 lg:px-8">
      <h2 className="text-3xl font-bold py-5">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          ref={carouselRef}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          activeIndex={carouselRef.current?.state?.activeIndex} 
          itemClass="item-spacing"
        />

      </div>
      {
        carouselRef.current?.state?.activeIndex !== responsive[1024].items && (<Button
          variant="contained"
          className="z-50"
          sx={{
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateX(50%) rotate(90deg)',
            bgcolor: 'white',
          }}
          onClick={() => carouselRef.current?.slideNext()}
          aria-label="next"
        >
          <NavigateNextIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
        </Button>)
      }
      {carouselRef.current?.state?.activeIndex !== 0 && (<Button
        variant="contained"
        className="z-50"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateX(-50%) rotate(90deg)',
          bgcolor: 'white',
        }}
        onClick={() => carouselRef.current?.slidePrev()}
        aria-label="previous"
      >
        <NavigateBeforeIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
      </Button>)}
    </div>
  );
}

HomeSectionCardCarousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
  sectionName: PropTypes.string.isRequired,
};
export default HomeSectionCardCarousel;
