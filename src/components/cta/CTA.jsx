import React from 'react';
import './cta.css';
import { motion } from 'framer-motion';
import { MilestoneAnimation  } from '../../animations';
import { useScroll } from '../../components';


const CTA = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div className='gpt3__cta' ref={element} variants={MilestoneAnimation } animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }}  >
      <div className='gpt3__cta-content'>
        <p>Request a demo</p>
        <h3>Register today & start exploring the endless posibilities to grow your business.</h3>
      </div>
      <div className='gpt3__cta-btn'>
        <button type='button'>Become a client</button>
      </div>
    </motion.div>
  )
}

export default CTA;