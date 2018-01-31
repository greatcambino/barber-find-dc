import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

class ImgCarousel extends Component {
  render = () => {
    return (
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        height={'100%'}
      >
        <div>
          <img src={img1} alt="1" />
        </div>
        <div>
          <img src={img2} alt="2" />
        </div>
        <div>
          <img src={img3} alt="3" />
        </div>
      </Carousel>
    )
  }
}

export default ImgCarousel
