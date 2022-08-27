import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/who we are.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility' >
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage}  alt='possibility'  />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>A bit about us</h4>
        <h1 className='gradient__text'>Hi, we're MARKETIFY</h1>
        <p>We know what it feels like to be frustrated by how difficult it is to get found online. You’ve watched companies, both large and small, totally transform their fortunes with a strong digital presence. You can’t help but wonder how they achieve it. How do you get found at the top of Google or grow an engaged social media following? It’s a mystery. But it shouldn’t be.
          We believe that as a business owner, digital marketing shouldn’t be something you have to figure out on your own – you’ve got a business to run, after all. So, we’re here to help you.</p>
        <h4>Request more info</h4>
      </div>
    </div>
  )
}

export default Possibility;