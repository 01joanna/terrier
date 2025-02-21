'use client'
import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Data from '../../data/projects.json';

export default function Intro() {
    const [currentProject, setCurrentProject] = useState(Data.projects[0]);

    return (
        <section className="intro w-screen h-screen relative flex" id="home">
            <video
                // src={currentProject.video}
                className="w-full h-full object-cover"
                type="video/mp4"
                autoPlay
                loop
                muted
                playsInline
                pointer-events-none="true"
            ></video>
            <Navigation
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
            />
        </section>
    );
}