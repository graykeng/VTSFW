import React from 'react'
import { Helmet } from 'react-helmet'

import CarouselFadeExample from '../component/Carousel'

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>VTSF | Home</title>
        </Helmet>
        <CarouselFadeExample />
    </div>
  )
}

export default Home