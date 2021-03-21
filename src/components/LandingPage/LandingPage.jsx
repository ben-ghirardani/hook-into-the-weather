import React from 'react';
import './LandingPage.css';
import Cloud from '../Images/Cloud.png';
import HeavyCloud from '../Images/HeavyCloud.png';
import { motion } from 'framer-motion';

function LandingPage() {

  const buttonVariants = {
    initial: {
      y: -100
    },
    animate: {
      y: 0
    }
  };

  const landingPageElements = {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5
    }
  };

  return <motion.div 
            className="landing-page"
            initial={landingPageElements}
          >
            

    <motion.img src={Cloud} className="cloud1" alt="cloud1" variant={buttonVariants} />
    <motion.img src={HeavyCloud} className="cloud2" alt="cloud2" variant={buttonVariants} />

  </motion.div>

}

export default LandingPage;