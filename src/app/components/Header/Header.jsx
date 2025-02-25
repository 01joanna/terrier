'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Toggle from '../Toggle/Toggle';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Annapurna_SIL } from 'next/font/google';

export default function Header() {

    const [mobile, setMobile] = useState(false)

    const handleMobile = () => {
        setMobile((prev) => !prev)
    }

    const variants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
        hidden: { opacity: 0, y: -50, transition: { duration: 0.5, ease: 'easeInOut' } },
        exit: { opacity: 0, y: -100, transition: { duration: 0.5, ease: 'easeInOut' } }
    }

    return (
        <header className={`py-10 md:px-10 flex flex-row justify-around bg-transparent w-screen font-liberation text-white fixed z-50 uppercase`}>
            <div id="logo" className='text-xs'>
                TERRIER
            </div>

            <nav className="md:flex hidden flex-row items-center text-xs leading-[1.2rem] gap-9 mr-20">
                <Link href="/#home" className="list1">Home</Link>
                <Link href="/#selected-works" className="list2">Selected Works</Link>
                <Link href="/projects" className="list2">Projects</Link>
                <Link href="/#contact" className="">About</Link>
                <Toggle />
            </nav>

            <div className="md:hidden flex flex-row">
                <button onClick={handleMobile}>
                    {
                        mobile ? <FaTimes /> : <FaBars />
                    }
                </button>

                {mobile && (
                    <AnimatePresence>
                    <motion.nav className='absolute top-[4rem] left-20 flex justify-center items-center text-white opacity-70 overflow-hidden z-[1000]'
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    >
                        <ul className='flex flex-col gap-1 text-xs'>
                            <Link href="/" className="hover:text-white transition-all cursor-pointer">Home</Link>
                            <Link href="/#selected-works" className="hover:text-white transition-all cursor-pointer">Selected Works</Link>
                            <Link href="/projects" className="hover:text-white transition-all cursor-pointer">Projects</Link>
                            <Link href="/#contact" className="hover:text-white transition-all cursor-pointer">About</Link>
                        </ul>
                    </motion.nav>
                    </AnimatePresence>
                )}
            </div>
        </header>
    );
}
