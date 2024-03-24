import React from 'react'
import PictureCard from './PictureCard'
import GalleryHeading from './GalleryHeading'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const PictureGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }

  },[isInView]);
  return (
    <div ref={ref}>
<motion.div className="our-mission"
        variants = {{
          hidden: {opacity: 0, y: 75},
          visible: {opacity: 1, y: 0},
        }}

        initial = "hidden"
        animate = {mainControls}
        transition={{duration: 0.25, delay: 0.25}}
      >
        <div>
          <GalleryHeading />
          <PictureCard />
        </div>
      
    </motion.div>
    </div>
  )
}

export default PictureGallery