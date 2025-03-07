"use client"

import background2 from "@/public/introBackground2.png"
import { montserrat, playfairDisplay } from "@/utils/typographies";

const Intro = () => {
    return (
        <section className="bg-cover bg-center h-[50rem] z-20" id="home" style={{ 
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent), url(${background2.src})`,
            backgroundPositionY: '90%'
        }}>

            <article className="flex flex-col items-center md:items-start text-center md:text-start pt-56 md:ml-40 gap-5 md:gap-2">
                <h3 className={`${playfairDisplay.className} text-white text-lg md:text-3xl font-medium italic md:ml-3`}>BIENVENIDOS A LA LLAVE DE SOL</h3>
                <h1 className={`${montserrat.className} text-white text-4xl md:text-6xl md:w-[45%] font-semibold tracking-wide px-3 md:px-0 pt-1`}>¿Y si dejar el azúcar y el glúten fuera mas sencillo de lo que pensas?</h1>
                <button
                    className={`${montserrat.className} text-white text-lg md:text-xl bg-[#d6002d] rounded-full px-10 md:px-12 py-3 hover:bg-[#fd9ef8] transition-all duration-400 mt-5`}
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