/* eslint-disable jsx-a11y/media-has-caption */
import { playfairDisplay } from "@/utils/typographies"

const Presentation = () => {
    return (
        <div className='pt-14 pb-10 w-[100%] md:w-[80%] m-auto -mt-20 flex flex-col justify-center gap-10 bg-[#FF972A] md:rounded-3xl relative mb-14'>
            <h2 className={` ${playfairDisplay.className} text-2xl md:text-4xl font-bold text-white text-center mx-6 md:mx-10 -mt-5 md:-mt-0`}>¿POR QUÉ TE CUESTA TANTO DEJAR EL AZUCAR Y EL GLUTEN?  </h2>

            <div className='border-b-1 border-white w-[15rem] md:w-[30rem] self-center' />
            <div className="mx-2 flex justify-center items-center">
                <iframe
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="w-full m-auto rounded-xl overflow-hidden md:min-h-[37rem] min-h-[18.2rem] "
                    src="https://www.youtube.com/embed/x4B9nPGK78k?rel=0&modestbranding=1&controls=0&showinfo=0"
                    title="YouTube video player" />
            </div>
        </div>
    )
}

export default Presentation