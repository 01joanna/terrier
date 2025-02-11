'use client'
import React from 'react';
import Data from '../../data/projects.json';

export default function Navigation({ currentProject, setCurrentProject }) {
    return (
        <div className="absolute flex w-full h-full top-0 left-0 items-center justify-center z-20 gap-64">
            <h1 className="titulo text-gray-200">{currentProject.name}</h1>
            <div className="max-h-[6rem] max-w-[10rem] overflow-y-auto no-scrollbar">
                <ul className="font-liberation uppercase text-xs text-white">
                    {Data.projects.map((project) => (
                        <li key={project.id}>
                            <a
                                href={`#${project.id}`}
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    setCurrentProject(project);
                                }}
                                className="list2 opacity-50 hover:opacity-100 cursor-pointer"
                            >
                                {project.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
