import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/marketify-logito.png';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Join us and change the future of your business.</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request More Info</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          {/* <img src={gpt3Logo} alt='logo' /> */}
          <h4 className='gpt3__navbar-logo'>MARKETIFY</h4>
          <p>Buenos Aires, Argentina.</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Services</h4>
          <p>SEO</p>
          <p>Paid Social Media Advertising</p>
          <p>Email Marketing</p>
          <p>Web Development</p>
          <p>Ecommerce</p>
          <p>Marketing Consultancy</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Case Studies</p>
          <p>About Us</p>
          <p>Meet the team</p>
          <p>Blogs</p>
          <p>FAQs</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Legal</h4>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Disclaimer</p>
          <p>Corporate Social</p>
          <p>Responsibility</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2022 MARKETIFY. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer