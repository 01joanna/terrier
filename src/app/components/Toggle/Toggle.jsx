import React, { useState, useEffect } from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { MdCircle } from "react-icons/md";

export default function Toggle() {

    const [dark, setDark] = useState(true);
    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.style.setProperty('--bg', '#000000');
            root.style.setProperty('--text', '#ffffff');
        } else {
            root.style.setProperty('--bg', '#ffffff');
            root.style.setProperty('--text', '#000000');
        }
    }
    , [dark]);

    const toggleMode = () => {
        console.log("hola")
        setDark(prev => !prev);
    };

    return (
        <button>
            {
                dark ? <FaRegCircle /> : <MdCircle />
            }
        </button>
    )
}