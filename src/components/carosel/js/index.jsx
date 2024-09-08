import React from 'react'
import EmblaCarousel from './EmblaCarousel'

import '../css/base.css'
import '../css/sandbox.css'
import '../css/embla.css'

const OPTIONS = { loop: true }


const Carousel = ({slides}) => (
  <>
  
    <EmblaCarousel slides={slides} options={OPTIONS} />
   
  </>
)
export default Carousel
