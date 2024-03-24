import React from 'react'
import Sample from '../Components/Sample'
import { Helmet } from 'react-helmet-async'
import Footer from '../Components/Footer'
import PictureGallery from '../Components/PictureGallery'
import OurMission from '../Components/OurMission'

const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>CYSCOM</title>
      </Helmet>

      {/* Your code goes here */}
      <OurMission />
      <PictureGallery />
      <Footer />
      {/* <Sample /> */}
    </div>
  )
}

export default LandingPage
