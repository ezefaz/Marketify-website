import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { useScroll } from '../../components';
import { navAnimation } from '../../animations';
import { motion } from 'framer-motion';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#explanation">How it works?</a></p>
    <p><a href="#possibility">About Us</a></p>
    <p><a href="#features">Services</a></p>
    <p><a href="#blog">Blog</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [element, controls] = useScroll();

  return (
    <motion.div className='gpt3__navbar' ref={element} variants={navAnimation} transition={{ delay: 0.1 }} animate={controls}>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          {/* <img src={logo} alt='logo' /> */}
          <h4 className='gpt3__navbar-logo'>MARKETIFY</h4>
        </div>
        <div className='gpt3__navbar-links_container'>
        <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        { toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Navbar;