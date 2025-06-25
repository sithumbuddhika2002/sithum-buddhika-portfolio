// Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ButtonPrimary, ButtonOutline } from './Button';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="pt-32 lg:pt-44"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-4">
            <motion.figure
              className="img-box w-12 h-12 rounded-full overflow-hidden border-2 border-sky-400"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="/images/avatar-1.jpg"
                width={48}
                height={48}
                alt="Sithum Buddhika portrait"
                className="img-cover"
              />
            </motion.figure>
            <div className="flex items-center gap-2 text-zinc-300 text-sm font-medium">
              <motion.span
                className="relative w-3 h-3 rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              Available for work
            </div>
          </div>
          <motion.h2
            className="headline-1 max-w-[20ch] mt-6 mb-10 lg:mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Building Scalable Modern Websites for the Future
          </motion.h2>
          <div className="flex items-center gap-4">
            <ButtonPrimary label="Download CV" icon="download" href="/sithum_buddhika_cv.pdf" />
            <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" />
          </div>
        </motion.div>
        <motion.div
          className="hidden lg:block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <figure className="w-full max-w-[520px] ml-auto relative">
            <motion.img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt="Sithum Buddhika"
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-sky-500/30 to-transparent rounded-2xl"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
          </figure>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;