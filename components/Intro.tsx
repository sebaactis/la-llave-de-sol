"use client"

import background from "@/public/introBackground.webp"

const Intro = () => {
    return (
        <section className="bg-center bg-cover h-[50rem] z-20" id="home" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${background.src})` }}>

            <article className="flex flex-col items-center md:items-start text-center md:text-start pt-56 md:ml-36 gap-5 md:gap-2">
                <h3 className="text-white text-lg md:text-2xl font-medium italic md:ml-1">BIENVENIDOS A LA LLAVE DE SOL</h3>
                <h1 className="text-white text-4xl md:text-6xl md:w-[45%] font-bold tracking-wide px-3 md:px-0">¿Y si dejar el azúcar y el glúten fuera mas sencillo de lo que pensas?</h1>
                <button
                    className={`text-white text-lg md:text-xl bg-[#f48e22] rounded-full px-10 md:px-12 py-3 hover:bg-[#cb771c] transition-all duration-150 mt-5`}
                    onClick={() => {
                        const benefitsSection = document.getElementById('benefits');

                        if (benefitsSection) {
                            benefitsSection.scrollIntoView({ behavior: 'smooth' })
                        }
                    }}>
                    EXPERIENCIA DE LAS 7 LLAVES
                </button>
            </article>
        </section>
    )
}

export default Intro