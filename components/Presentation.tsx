/* eslint-disable jsx-a11y/media-has-caption */
import { playfairDisplay } from "@/utils/typographies"

const Presentation = () => {
    return (
        <div className='pt-14 pb-10 w-[90%] md:w-[80%] m-auto -mt-20 flex flex-col justify-center items-center gap-10 bg-[#FF972A] rounded-3xl relative mb-14'>
            <h2 className={` ${playfairDisplay.className} text-2xl md:text-4xl font-bold text-white text-center mx-6 md:mx-10 -mt-5 md:-mt-0`}>¿POR QUÉ TE CUESTA TANTO DEJAR EL AZUCAR Y EL GLUTEN?  </h2>

            <div className='border-b-1 border-white w-[15rem] md:w-[30rem]' />
            <div>
                <video controls className="w-[95%] md:w-full max-w-[67rem] m-auto rounded-xl overflow-hidden" poster="/videoLandingPortada.png">
                    <source src="/videoLanding.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default Presentation