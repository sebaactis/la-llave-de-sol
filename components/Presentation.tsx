import { playfairDisplay } from "@/utils/typographies"

const Presentation = () => {
    return (
        <div className='py-20 w-[80%] m-auto -mt-20 flex flex-col justify-center items-center gap-10 bg-[#FF972A] rounded-3xl relative'>
            <div className="absolute bottom-5 -left-8 md:-left-11 w-24 h-24 bg-orange-300 rounded-full opacity-70 -z-10" />
            <div className="absolute -right-8 md:-right-11 w-24 h-24 bg-orange-300 rounded-full opacity-70 -z-10" />
            <h2 className={` ${playfairDisplay.className} text-xl md:text-4xl font-bold text-white text-center`}>¿POR QUÉ TE CUESTA TANTO DEJAR EL AZUCAR Y EL GLUTEN?  </h2>

            <div className='border-b-1 border-white w-[15rem] md:w-[30rem]' />
            <div>
                VIDEO ACA
            </div>
        </div>
    )
}

export default Presentation