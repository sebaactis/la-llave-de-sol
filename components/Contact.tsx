import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react'
import React from 'react'

import { playfairDisplay } from '@/utils/typographies'

const Contact = () => {
    return (
        <section className='pb-10' id="contact">
            <div className='py-10 w-[80%] m-auto flex flex-col justify-center items-center gap-3'>
                <h2 className={`${playfairDisplay.className} text-3xl font-bold text-black/60`}>CONTACTO</h2>
                <div className='border-b-1 border-black/40 w-[15rem]' />
                <p className='text-xl w-[80%] text-center text-black/60'>Estamos aquí para ayudarte en tu camino de sanación y crecimiento personal.</p>
            </div>

            <form className='flex flex-col justify-center items-center gap-5'>
                <div className='relative'>
                    <input
                        required
                        className="bg-[#ff982aa7] border-[#ff982aa7] rounded-xl pl-10 py-2 w-[23rem] md:w-[35rem] placeholder:text-white placeholder:font-bold"
                        placeholder="Nombre"
                        type="text"
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white font-bold h-5 w-5" />
                </div>

                <div className='relative'>
                    <input
                        required
                        className="bg-[#ff982aa7] border-[#ff982aa7] rounded-xl pl-10 py-2 w-[23rem] md:w-[35rem] placeholder:text-white placeholder:font-bold"
                        placeholder="Email"
                        type="text"
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
                </div>

                <div className='relative'>
                    <input
                        required
                        className="bg-[#ff982aa7] border-[#ff982aa7] rounded-xl pl-10 py-2 w-[23rem] md:w-[35rem] placeholder:text-white placeholder:font-bold"
                        placeholder="Teléfono"
                        type="text"
                    />
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
                </div>

                <div className="relative">
                    <textarea
                        required
                        className="bg-[#ff982aa7] border-[#ff982aa7] rounded-xl min-h-[10rem] min-w-[23rem] md:w-[35rem] placeholder:text-white placeholder:font-bold pl-10 pt-3"
                        placeholder="Mensaje"
                    />
                    <MessageSquare className="absolute left-3 top-3 text-white h-5 w-5" />
                </div>
                <div className='flex gap-2 items-center bg-[#f6840add] w-[23rem] md:w-[35rem] justify-center py-2 rounded-full text-white hover:bg-[#c57621] transition-all duration-200'>
                    <button>Enviar Mensaje</button>
                    <Send />
                </div>

            </form>
        </section>
    )
}

export default Contact