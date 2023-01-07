import React from 'react'
import { Helmet } from 'react-helmet'

import VTSFcarousel from '../component/VTSFcarousel'

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>VTSF | Home</title>
        </Helmet>
        <VTSFcarousel />
    </div>
  )
}

export default Home