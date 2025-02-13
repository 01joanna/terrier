'use client'
import React from 'react';
import Data from '../../data/projects.json';
import { motion } from 'framer-motion';

export default function Navigation({ currentProject, setCurrentProject }) {
    return (
        <div className="absolute flex w-full h-full top-0 left-0 items-center justify-center z-20 gap-64">
            
            {/* Animación para el título con framer-motion */}
            <motion.h1
                className="titulo text-gray-200"
                key={currentProject.id}  // Cambiar cuando el proyecto cambia
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {currentProject.name}
            </motion.h1>

            <div className="max-h-[6rem] w-[20rem] overflow-y-auto no-scrollbar">
                <ul className="font-liberation uppercase text-xs text-white">
                    {Data.projects.map((project) => (
                        <li key={project.id}>
                            <a
                                href={`#${project.id}`}
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    setCurrentProject(project);
                                }}
                                className={`list2 cursor-pointer transition-opacity flex justify-between ${
                                    project.id === currentProject.id
                                    ? 'text-white opacity-100' 
                                    : 'opacity-50 hover:opacity-100'
                                }`}
                            >   
                                <p>{project.name}</p>
                                <p>{project.year}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div 
            className='absolute bottom-20 left-3'
            id='intro-description'
            >
                <motion.p
                    className='text-white text-xs font-liberation'
                    key={currentProject.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {currentProject.description}
                </motion.p>
            </div>
        </div>
    );
}
