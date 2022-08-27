import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/header.png';
import { motion } from 'framer-motion';
import { homeAnimations, homeInfoAnimation } from '../../animations';

const Header = () => {
  return (
    <motion.div className='gpt3__header section__padding' id='home' variants={homeAnimations} transition={{ delay: 0.3, duration: 0.6, type: "tween" }} >
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>We boost growth for your business</h1>
        <p>Digital marketing driven by data, freeing you up to focus on the bigger-picture thinking and scaling your startup.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your email address..' />
          <button type='button' >Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>+1.200 people trust us in the last 24 hours.</p>
        </div>
      </div>
        <motion.div className='gpt3__header-image' variants={homeInfoAnimation} transition={{ delay: 0.3, duration: 0.6, type: "tween" }} >
          <img src={ai} alt='ai' />
        </motion.div>
    </motion.div>
  )
}

export default Header;