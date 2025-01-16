import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <section className='pb-10'>
            <div className='py-10 w-[80%] m-auto flex flex-col justify-center items-center gap-3'>
                <h2 className='text-2xl font-bold text-black/60'>CONTACTO</h2>
                <div className='border-b-1 border-black/40 w-[15rem]' />
                <p className='text-xl w-[80%] text-center text-black/60'>Estamos aquí para ayudarte en tu camino de sanación y crecimiento personal.</p>
            </div>

            <form className='flex flex-col justify-center items-center gap-5'>
                <div className='relative'>
                    <input
                        required
                        className="bg-[#f1e3d8] border-[#f1e3d8] rounded-xl pl-10 py-2 w-[23rem] md:w-[35rem]"
                        placeholder="Nombre"
                        type="text"
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>

                <div className='relative'>
                    <input
                        required
                        className="bg-[#f1e3d8] border-[#f1e3d8] rounded-xl pl-10 py-2 w-[23rem] md:w-[35rem]"
                        placeholder="Email"
                        type="text"
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>

                <div className='relative'>
                    <input
                        required
                        className="bg-[#f1e3d8] border-[#f1e3d8] rounded-xl pl-10 py-2 w-[23rem] md:w-[35rem]"
                        placeholder="Teléfono"
                        type="text"
                    />
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>

                <div className="relative">
                    <textarea
                        required
                        className="bg-[#f1e3d8] border-[#f1e3d8] rounded-xl min-h-[10rem] min-w-[23rem] md:w-[35rem] pl-10 pt-3"
                        placeholder="Mensaje"
                    />
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                </div>
                <div className='flex gap-2 items-center bg-[#dab48b] w-[23rem] md:w-[35rem] justify-center py-2 rounded-full text-white hover:bg-[#b2916d] transition-all duration-200'>
                    <button>Enviar Mensaje</button>
                    <Send />
                </div>

            </form>
        </section>
    )
}

export default Contact