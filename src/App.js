import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

import { Article, Brand, CTA, Navbar, ScrollToTop } from './components';
import { Blog, Features, Footer, Header, Possibility, Explanation } from './containers';

function App() {
  return (
    <motion.div className="App" initial='hidden' animate='show'>
      <ScrollToTop />
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Possibility />
      <Explanation />
      <Features />
      <CTA />
      <Blog />
      <Footer />
    </motion.div>
  );
}

export default App;