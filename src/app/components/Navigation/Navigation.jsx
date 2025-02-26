'use client'
import React, { useState, useEffect, useRef } from 'react';
import Data from '../../data/projects.json';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Navigation({ currentProject, setCurrentProject }) {
    const router = useRouter();
    // const [scrollIndex, setScrollIndex] = useState(Math.floor(Data.projects.length / 2));
    const listRef = useRef(null);

    // useEffect(() => {
    //     if (listRef.current) {
    //         const listHeight = listRef.current.clientHeight;
    //         const itemHeight = listHeight / Data.projects.length;
    //         listRef.current.scrollTop = scrollIndex * itemHeight - listHeight / 2;
    //     }
    // }, [scrollIndex]);
    
    console.log(currentProject)
    return (
        <div className='absolute w-screen h-screen md:items-center items-start md:gap-20 md:justify-evenly justify-center flex md:flex-row flex-col'>
            <div className='w-3/5 flex justify-end'>
            <h1 
            id='titulo'
            className='text-4xl font-rapidbold uppercase'>
                {currentProject.name}
            </h1>
            </div>
            <div id='lista'
            className='w-1/5 flex justify-start md:ml-0 ml-10'>
                <nav className='md:w-full w-40 font-liberation text-xs'>
                    <ul className='mx-h-5' 
                    ref={listRef}
                    >
                        {Data.projects.map((project) => {
                                const isActive = project.id === currentProject.id;

                                return (
                                    <li key={project.name} className=''>
                                        <a 
                                        href={`/${project.id}`} 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.push(`/${project.id}`);
                                        }}
                                        onMouseOver={(e) => {
                                            e.preventDefault();
                                            setCurrentProject(project)
                                        }}
                                        className={`flex flex-row gap-20 cursor-pointer justify-between uppercase ${isActive ? 'text-white opacity-100' : 'opacity-50 hover:opacity-100'}`}
                                        // style={{transition: 'transform 0.5 ease-in-out'}}
                                        >
                                            <p className=''>{project.name}</p>
                                            <p className='md:flex hidden '>{project.year}</p>
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
