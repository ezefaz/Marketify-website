import React from 'react';
import './explanation.css';
import { Feature } from '../../components';
import { motion } from 'framer-motion';
import { servicesAnimation } from '../../animations';
import { useScroll } from '../../components';

const WhatGPT3 = () => {

  const [element, controls] = useScroll();
  return (
    <div className='gpt3__whatgpt3 section__margin' id='explanation' ref={element} >
      <motion.div className='gpt3__whatgpt3-feature' variants={servicesAnimation} animate={controls} transition={{ delay: 0.03, type: 'tween', duration: 0.5 }}   >
      <Feature title='01. THE PROPOSAL' text='This is where we get to know you, your startup, and exactly what you need. As part of that discovery process, we’ll do some initial research and provide you with an audit that includes some early strategic suggestions and defines the scope of our work together.' />
      </motion.div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>Here's how it works</h1>
        <p>Explore the services</p>
      </div>
      <motion.div className='gpt3__whatgpt3-container' variants={servicesAnimation} animate={controls} transition={{ delay: 0.02, type: 'tween', duration: 0.5 }} >
        <Feature title='02. THE KICKOFF' text='Once we’ve agreed on the initial scope of work, we’ll all get together for an onboarding call where we discuss your needs in more detail and take an even deeper dive into your startup. At that point we’ll make tweaks to your strategy and marketing plan so everyone is aligned.' />
        <Feature title='03. THE LAUNCH' text='Before we run any new campaigns, we’ll analyse your previous campaign data to learn what’s been working or not working for you already. Then we’ll create any assets needed before setting up the campaigns and handling any reporting and tracking, automating wherever possible. After that it’s all systems go.'/>
        <Feature title='04. THE EXPERIMENT' text='Now that your campaigns are up and running, we’ll keep you in the loop through our automated data studio reports. We’ll also be keeping a close eye on your results, analysing them, experimenting with different ideas, and optimising your campaigns to give you the best possible ROI.'/>
        <Feature title='05. THE EXPANSION' text='As your marketing goes from strength to strength and you start seeing growth, chances are there’ll be even more campaigns to run and ideas to put into action. At this point we can discuss how we might continue to work together and help scale your startup.'/>
      </motion.div>
    </div>
  )
}

export default WhatGPT3;