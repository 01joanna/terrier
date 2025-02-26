export default function Contact() {
    return (
        <section className="w-screen h-screen md:h-[90vh] bg-black items-center justify-center flex md:mt-0 mt-20" id="contact">
            <div className="bg-black rounded-lg h-[97%] w-[97%] items-center justify-center flex flex-col md:gap-[80px] gap-8">
                <div>
                    <h1 className="md:w-[900px] font-liberation md:text-justify text-start leading-7 md:px-0 px-10"><span className="titulo">From the heart of Barcelona </span>to the world stage, we're your go-to for breathtaking creativity. Specializing in music videos, fashion films, and commercials, we infuse each project with boundless energy, passion, and creativity. With every frame, beat and scene, we channel our relentless drive to bring your vision to life in the most electrifying way possible. Let's make magic happen, wherever you are.</h1>
                </div>
                <div className="flex md:flex-row flex-col md:gap-[200px] gap-10">
                    <div className="flex flex-col gap-4"> 
                        <div className="font-liberation"><h2 className="titulo">Email</h2>hola@terrier.film</div>
                        <div className="font-liberation"><h2 className="titulo">Phone</h2>(+34) 630 154 193</div>
                    </div>
                    <div>
                    <div className="flex flex-col gap-4"> 
                        <div className="font-liberation"><h2 className="titulo">Instagram</h2>@terrier.film</div>
                        <div className="font-liberation"><h2 className="titulo">Vimeo</h2>hola@terrier.film</div>
                    </div>
                    </div>
                </div>
                <div>
                    <p className="font-liberation">© 2025 TERRIER</p>
                    </div>
            </div>
        </section>
    )
}