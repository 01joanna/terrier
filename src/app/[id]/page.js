'use client'
import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import Data from '../data/projects.json';

export default function ProjectPage() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        if (id) {
            const selected = Data.projects.find(p => p.id.toString() === id);
            setProject(selected);
        }
    }, [id]);

    if (!project) {
        return <div className="w-screen h-screen flex items-center justify-center text-xl">Proyecto no encontrado</div>;
    }

    return (
        <section className="w-screen h-screen py-24 flex flex-col gap-20">
            <div id="p-video" className="justify-center flex">
                <iframe
                    src={`${project.video}?autoplay=1&loop=1&mute=1&background=1&controls=0`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="w-full h-[90vh] object-cover"
                    style={{width: '100%', height: '90vh'}}
                />
            </div>
            <div id="p-desc" className="mb-6 px-20">
                <div className="flex gap-4 items-end">
                    <h1 className="text-4xl font-rapidbold uppercase">"{project.name}" {project.name2}</h1>
                    <p className="text-md font-liberation uppercase">directed by {project.director}</p>
                </div>
                <p className="text-lg">{project.description}</p>
            </div>
            {/* <div id="p-photos" className="grid grid-cols-3 gap-4">
                {project.photos.map((photo, index) => (
                    <img key={index} src={photo} alt={`Foto ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
                ))}
            </div> */}
        </section>
    );
}
