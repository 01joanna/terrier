'use client'
import React, { useState } from 'react';
import Data from '../../data/projects.json';

export default function Overview() {

    const [view, setView] = useState('video');


    return (
        <section className='w-screen h-full pb-40 pt-20 px-20 bg-white' id='projects'>
            <div className='flex flex-row px-10 items-end gap-10'>
                <h1 className='titulo2 text-black text-[500px]'>Projects</h1>
                <div className='flex flex-row gap-10 font-liberation text-lg pb-3 uppercase'>
                    <a
                        className={`cursor-pointer ${view === 'video' ? 'text-white' : 'text-gray-400'}`}
                        onClick={() => setView('video')}>
                        Per video
                    </a>
                    <a
                        className={`cursor-pointer ${view === 'list' ? 'text-white' : 'text-gray-400'}`}
                        onClick={() => setView('list')}>
                        Per list
                    </a>
                </div>
            </div>

            <div className="px-10 mt-5">
                {view === 'video' ? (
                    <div className="grid grid-cols-3 gap-10">
                        {Data.projects.map((project, index) => (
                            <video 
                                key={index} 
                                controls
                                className="w-full">
                                <source src={project.videoUrl} type="video/mp4" />
                                Tu navegador no soporta videos.
                            </video>
                        ))}
                    </div>
                ) : (
                    <div>
                        <ul>
                            {Data.projects?.map((project, index) => (
                                <li key={index} className="border-b py-2 text-lg font-liberation uppercase">{project.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    )
}