import { NavbarComponent } from "./NavbarComponent"

import background from "@/public/introBackground.webp"

const Intro = () => {
    return (
        <section className="bg-center bg-cover h-[50rem] z-20" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${background.src})` }}>
            <NavbarComponent />

            <article className="flex flex-col items-start mt-40 ml-36 gap-2">
                <h3 className="text-white text-2xl font-medium italic ml-1">BIENVENIDOS A LA LLAVE DE SOL</h3>
                <h1 className="text-white text-6xl w-[50%] font-bold tracking-wide">Descubrí una experiencia transformadora para tu bienestar</h1>
                <button className={`text-white text-xl bg-[#f48e22] rounded-full px-16 py-3 hover:bg-[#cb771c] transition-all duration-150 mt-5`}>SERVICIOS</button>
            </article>
        </section>
    )
}

export default Intro