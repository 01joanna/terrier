import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Overview from './components/Overview/Overview';
import Contact from './components/Contact/Contact';

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Intro />
      <Overview />
      <Contact/>
    </div>
  );
}
