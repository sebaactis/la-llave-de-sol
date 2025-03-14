import { playfairDisplay } from "@/utils/typographies"

const Presentation = () => {
    return (
        <div className='py-20 w-[80%] m-auto -mt-20 flex flex-col justify-center items-center gap-10 bg-[#FF972A] rounded-3xl relative'>
            <h2 className={` ${playfairDisplay.className} text-xl md:text-4xl font-bold text-white text-center mx-10 -mt-5 md:-mt-0`}>¿POR QUÉ TE CUESTA TANTO DEJAR EL AZUCAR Y EL GLUTEN?  </h2>

            <div className='border-b-1 border-white w-[15rem] md:w-[30rem]' />
            <div>
                VIDEO ACA
            </div>
        </div>
    )
}

export default Presentation