'use client'
import React, { useState, useEffect, useRef } from 'react';
import Data from '../../data/projects.json';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation({ currentProject, setCurrentProject }) {

    const [scroll, setScroll] = useState(0);
    const listRef = useRef(null);
    
    console.log(currentProject)
    return (
        <div className='absolute w-screen h-screen flex justify-center items-center gap-20'>
            <div className='w-1/2 flex justify-end'>
            <h1 
            id='titulo'
            className='text-4xl font-rapidbold'>Hola</h1>
            </div>
            <div id='lista'
            className='w-1/3 flex justify-start'>
                <nav className='w-full font-liberation text-xs'>
                    <ul>
                        {Data.projects.map((project) => {
                                const isActive = project.id === currentProject.id;

                                return (
                                    <li key={project.name} className=''>
                                        <a 
                                        href=''
                                        className={`flex flex-row gap-20 cursor-pointer transition-opacity justify-between uppercase`}
                                        style={{transition: 'transform 0.5 ease-in-out'}}>
                                            <p>{project.name}</p>
                                            <p>{project.year}</p>
                                        </a>
                                    </li>
                                )
                        }
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
