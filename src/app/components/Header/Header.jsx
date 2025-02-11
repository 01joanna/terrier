export default function Header() {
    return (
        <section className="py-10 px-10 flex flex-row justify-between bg-transparent w-screen font-liberation text-white fixed z-20 uppercase">
            <div>
                <a href="" className="titulo text-3xl">TERRIER</a>
            </div>
            <div className="flex flex-col items-end text-xs leading-[1.2rem]">
                <a href="#home" className="list1">Home</a>
                <a href="#projects" className="list2 ">Selected Works</a>
                <a href="#projects" className="list2 ">Projects</a>
                <a href="#contact" className="">Contact</a>
            </div>
        </section>
    )
}