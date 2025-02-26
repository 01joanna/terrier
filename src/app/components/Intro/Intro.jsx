'use client'
import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Data from '../../data/projects.json';

export default function Intro() {
    const [currentProject, setCurrentProject] = useState(Data.projects[0]);

    const backgroundReel = currentProject.reel ? currentProject.reel : currentProject.video;

    return (
        <section className="intro w-screen h-screen relative flex" id="home">
            <iframe
                src={backgroundReel}
                className=""
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