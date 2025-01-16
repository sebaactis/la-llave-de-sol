import background from "@/public/introBackground.webp"

const Intro = () => {
    return (
        <section className="bg-center bg-cover h-[50rem] z-20" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${background.src})` }}>

            <article className="flex flex-col items-center md:items-start text-center md:text-start pt-56 md:ml-36 gap-2">
                <h3 className="text-white text-lg md:text-2xl font-medium italic md:ml-1">BIENVENIDOS A LA LLAVE DE SOL</h3>
                <h1 className="text-white text-4xl md:text-6xl md:w-[45%] font-bold tracking-wide">Descubrí una experiencia transformadora para tu bienestar</h1>
                <button className={`text-white text-lg md:text-xl bg-[#f48e22] rounded-full px-12 md:px-16 py-3 hover:bg-[#cb771c] transition-all duration-150 mt-5`}>EXPERIENCIA</button>
            </article>
        </section>
    )
}

export default Intro