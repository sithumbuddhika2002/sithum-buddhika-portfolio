// Header.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full h-20 flex items-center z-50 bg-gradient-to-b from-zinc-900/95 to-transparent backdrop-blur-md"
    >
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <a href="/" className="logo">
            <img src="/images/logo.svg" width={48} height={48} alt="Sithum Buddhika" />
          </a>
        </motion.h1>
        <div className="relative md:justify-self-center">
          <motion.button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            whileTap={{ scale: 0.95 }}
          >
            <span className="material-icons">menu</span>
          </motion.button>
          <Navbar navOpen={navOpen} />
        </div>
        <motion.a
          href="#contact"
          className="btn btn-primary max-md:hidden md:justify-self-end"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;