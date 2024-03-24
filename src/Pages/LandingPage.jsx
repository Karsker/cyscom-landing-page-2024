import React from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from '../Components/Footer'
import PictureGallery from '../Components/PictureGallery'
import OurMission from '../Components/OurMission'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const LandingPage = () => {
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
      <Helmet>
        <title>CYSCOM</title>
      </Helmet>

      {/* Your code goes here */}
      <motion.div
      variants = {{
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0},
      }}

      initial = "hidden"
      animate = {mainControls}
      transition={{duration: 0.5, delay: 0.25}}
      >
        <OurMission />
        <PictureGallery />
        <Footer />
      </motion.div>
      {/* <Sample /> */}
    </div>
  )
}

export default LandingPage
