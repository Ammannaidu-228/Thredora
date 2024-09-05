import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';


function MainCarousel() {
const items = mainCarouselData.map((item)=> <img key={item.id} 
                                                 className='cursor-pointer' 
                                                 role='presentation' 
                                                 src={item.image}
                                            />)
  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        disableDotsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
  )
}

export default MainCarousel
