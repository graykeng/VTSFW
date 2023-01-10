import React from 'react'
import { Helmet } from 'react-helmet'

import VTSFcarousel from '../component/VTSFcarousel'

const Gallery = () => {
  return (
    <div>
        <Helmet>
            <title>VTSF | Gallery</title>
        </Helmet>
        <VTSFcarousel />
    </div>
  )
}

export default Gallery