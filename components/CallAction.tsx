import { FaWhatsapp } from "react-icons/fa";

const CallAction = () => {

  const phoneNumber = "+5491124063003";
  const message = "Hola quiero reservar mi lugar en la llave de sol!"

  return (
    <section className="py-16 my-10" id="call-to-action">
      <div className='py-20 w-[80%] m-auto flex flex-col justify-center items-center gap-5'>
        <h2 className='text-2xl font-bold text-black/60 text-center md:text-start'>¡VOS TAMBIÉN PODÉS SER PARTE DEL CAMBIO!</h2>
        <div className='border-b-1 border-black/50 w-[15rem] md:w-[30rem]' />
      </div>

      <div className='w-[100%] m-auto'>
        <video autoPlay loop muted className="w-full h-[50rem] rounded-md">
          <source src="https://storage.googleapis.com/msgsndr/XbIroeCo43YzroXkLcgO/media/67289aa684cd8364415c81f7.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='border-b-1 border-black/50 w-[15rem] md:w-[30rem] m-auto mt-16' />

      <div className='flex flex-col items-center justify-center mt-10 gap-5 bg-[#c4ac92] rounded-md w-[90%] md:w-[50%] py-10 m-auto'>
        <p className='text-xl text-white text-center md:text-start'>
          <span className='font-bold mr-1'>Proxima fecha de la experencia:</span>
          DD/MM/YYYY
        </p>
        <p className='text-xl text-white'><span className='font-bold'>Horario:</span> XX.XX Hs</p>
        <p className='text-xl text-white'><span className='font-bold'>Lugar:</span> Calle 123 - Buenos Aires</p>
        <a className="flex items-center gap-2 bg-green-500 mt-1 px-3 py-2 rounded-md text-white font-bold transition-all duration-300 hover:bg-green-500/50" href={`https://wa.me/${phoneNumber}?text=${message}`} rel="noopener noreferrer" target="_blank">
          <FaWhatsapp size={28} />
          Reservá tu lugar
        </a>
      </div>



    </section>
  )
}

export default CallAction