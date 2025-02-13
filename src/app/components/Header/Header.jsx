'use client'
import Link from 'next/link';

export default function Header() {
    return (
        <section className="py-10 px-10 flex flex-row justify-between bg-transparent w-screen font-liberation text-white fixed z-50 uppercase">
            <div></div>
            <div className="flex flex-row items-end text-xs leading-[1.2rem] gap-9 mr-20">
                <Link href="/#home" className="list1">Home</Link>
                <Link href="/#selected-works" className="list2">Selected Works</Link>
                <Link href="/projects" className="list2">Projects</Link>
                <Link href="/#contact" className="">Contact</Link>
            </div>
        </section>
    );
}
