'use client'
import React from 'react';
import Intro from './components/Intro/Intro';
import Contact from './components/Contact/Contact';
import Loader from './components/Loader/Loader';
import Selected from './components/Selected/Selected';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section
      // initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}>
    {/* <Loader /> */ }
        <Intro />
        <Selected />
        <Contact />
    </motion.section >
  );
}
