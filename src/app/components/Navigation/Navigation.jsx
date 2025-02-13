'use client'
import React from 'react';
import Data from '../../data/projects.json';

export default function Navigation({ currentProject, setCurrentProject }) {
    return (
        <div className="absolute flex w-full h-full top-0 left-0 items-center justify-center z-20 gap-64">
            <h1 className="titulo text-gray-200">{currentProject.name}</h1>
            <div className="max-h-[6rem] w-[20rem] overflow-y-auto no-scrollbar">
                <ul className="font-liberation uppercase text-sm text-white">
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
                <p className='text-white text-xs font-liberation'>
                    {currentProject.description}
                </p>
            </div>
        </div>
    );
}
