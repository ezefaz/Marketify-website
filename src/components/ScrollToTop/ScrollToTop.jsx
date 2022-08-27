import React, { useState } from 'react';
import { FaChevronUp } from "react-icons/fa";
import './scrollToTop.css'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    window.addEventListener('scroll', () => {
        window.pageYOffset>100 ? setVisible(true) : setVisible(false);
    });

  return (
    <div className='gpt3__scroll'>
        <a href="#" className={`${visible ? "block" : "none"}`}> 
         <FaChevronUp  />
        </a> 
    </div>
  )
}

export default ScrollToTop  