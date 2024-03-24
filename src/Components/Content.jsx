import React from 'react'
import './Content.css'

import contentImage from '/assets/images/lock_pass.png'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

function Content() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }

  },[isInView]);
  return (
    <>
    <div ref={ref} >

      <motion.div className="content"
        variants = {{
          hidden: {opacity: 0, y: 75},
          visible: {opacity: 1, y: 0},
        }}

        initial = "hidden"
        animate = {mainControls}
        transition={{duration: 0.5, delay: 0}}
      >
        
          <div className="content-image">
            <img src={contentImage} alt="lock_pass_icon" />
          </div>
          <div className="content-text">
            <div className="text-header">
              <b>
                Think before
                <br />
                you <span className="click">click</span>.
              </b>
            </div>
            <div className="text-content">
              Started with a few people having cyber safety in mind, the chapter
              now boasts a big gathering of members and associates alike. Join us
              on our mission to make cyberspace a safer place!
            </div>
            <div className="read-more-container">
              <a href="/" className="text-read-more-button">
                <b>Read More</b>
              </a>
            </div>
          </div>
      
      </motion.div>
    </div>
    </>
  )
}

export default Content
