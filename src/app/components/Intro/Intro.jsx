'use client'
import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Data from '../../data/projects.json';

export default function Intro() {
    const [currentProject, setCurrentProject] = useState(Data.projects[0]);
    
    const general = Data.external[0].video;

    return (
        <section className="intro w-screen h-screen relative flex" id="home">
            <iframe
                // src={currentProject.video}
                src={general}
                className="object-cover -mt-20"
                // frameBorder="0"
                // allow="autoplay; fullscreen"
                // allowFullScreen
            ></iframe>
            <Navigation
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
            />
        </section>
    );
}