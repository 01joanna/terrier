'use client'
import React, { useEffect, useState, useRef } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import Vimeo from "@vimeo/player";
import { useParams } from 'next/navigation';
import Data from '../data/projects.json';

export default function ProjectPage() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    const videoRef = useRef(null);
    const [player, setPlayer] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);



    useEffect(() => {
        if (videoRef.current) {
            const newPlayer = new Vimeo(videoRef.current);
                setPlayer(newPlayer);

                newPlayer.setVolume(0);
                newPlayer.on('play', () => setPlaying(true));
                newPlayer.on('pause', () => setPlaying(false));

                newPlayer.getDuration().then((d) => setDuration(d));
                newPlayer.on('timeupdate', (data) => {
                    setProgress((data.seconds / duration) * 100);
                });
        }
    }
    , [duration]);
    
    const togglePlay = async () => {
        if (!player) return;
        
        const status = await player.getPaused();
        status ? player.play() : player.pause();
    }

    const toggleMute = async () => {
        if (!player) return;

        const volume = await player.getVolume();
        if (volume > 0) {
            player.setVolume(0);
            setMuted(true);
        } else {
            player.setVolume(1);
            setMuted(false);
        }
    }

    const handleSeek = async (e) => {
        if (!player) return;
    
            const value = e.target.value;
            const time = (value / 100) * duration;
            player.setCurrentTime(time);
            setProgress(value);
    }

    useEffect(() => {
        if (id) {
            const selected = Data.projects.find(p => p.id.toString() === id);
            setProject(selected);
        }
    }, [id]);

    if (!project) {
        return <div className="w-screen h-screen flex items-center justify-center text-xl"></div>;
    }

    return (
        <section className="w-screen h-screen flex flex-col gap-20">
            <div id="p-video" className="justify-center flex">
                <iframe
                    ref={videoRef}
                    src={`${project.video}?autoplay=1&loop=1&mute=1&background=1&controls=0`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="w-full h-[100vh] object-cover"
                    style={{ width: '100%', height: '100vh' }}
                />
            </div>
            <div id="p-desc" className="mb-40 px-20">
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

            <div className="absolute bottom-10 left-10">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="absolute bottom w-[190vh] h-1 bg-gray-500 rounded-lg appearance-none cursor-pointer"
                />

                <button
                onClick={togglePlay}
                className="absolute bottom-10 left-10 transition duration-300 hover:scale-110"
            >
                {playing ? <FaPause size={24} /> : <FaPlay size={24} />}
            </button>

            <button
                onClick={toggleMute}
                className="absolute bottom-10 left-20 transition duration-300 hover:scale-110"
            >
                {muted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
            </button>
            </div>

        </section>
    );
}
