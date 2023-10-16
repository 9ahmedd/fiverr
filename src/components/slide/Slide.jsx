import React, { Children } from 'react'
import './Slide.scss'
import Slider from 'infinite-react-carousel';
// import CatCard from '../catCart/CatCard';
// import {cards} from '../../data'

function Slide({children,slidesToShow,arrowsScroll}) {
  return (
      <div className='slide'>
          <div className="container">
        <Slider slidesToShow = {slidesToShow} arrowsScroll = {arrowsScroll}>
          {children}
          {/* {cards.map(card => (
          <CatCard item={card} key={card.id}/>
        ))} */}
  </Slider>
          </div>
    </div>
  )
}

export default Slide