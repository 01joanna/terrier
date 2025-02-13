'use client'
import Overview from "../components/Overview/Overview"
import { motion } from "framer-motion"

export default function Projects() {
    return (
        <div>
            <motion.section 
                className="w-screen h-screen bg-blue-400 relative"
                id="selected-works"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition = {{ duration: 0.5 }}
            >
            <Overview />
            </motion.section>
        </div>
    )
}