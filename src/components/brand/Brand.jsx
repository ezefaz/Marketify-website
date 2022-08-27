import React from 'react';
import './brand.css';
import { google, dropbox, slack, atlassian, shopify } from './imports';
import { motion } from 'framer-motion';
import { MilestoneAnimation  } from '../../animations';
import { useScroll } from '../../components';

const Brand = () => {
  const [element, controls] = useScroll();
  return (
    <div className='gpt3__brand section__padding' ref={element}  >
      <motion.div variants={MilestoneAnimation } animate={controls} transition={{ delay: 0.04, type: "tween", duration: 0.9 }}>
        <img src={google} alt={google} />
      </motion.div>
      <motion.div variants={MilestoneAnimation } animate={controls} transition={{ delay: 0.04, type: "tween", duration: 0.9 }}>
        <img src={slack} alt={slack} />
      </motion.div>
      <motion.div variants={MilestoneAnimation } animate={controls} transition={{ delay: 0.04, type: "tween", duration: 0.9 }}>
        <img src={dropbox} alt={dropbox} />
      </motion.div>
      <motion.div variants={MilestoneAnimation } animate={controls} transition={{ delay: 0.04, type: "tween", duration: 0.9 }} >
        <img src={atlassian} alt={atlassian} />
      </motion.div>
      <motion.div variants={MilestoneAnimation } animate={controls} transition={{ delay: 0.04, type: "tween", duration: 0.9 }}>
        <img src={shopify} alt={shopify} />
      </motion.div>
    </div>
  )
}

export default Brand