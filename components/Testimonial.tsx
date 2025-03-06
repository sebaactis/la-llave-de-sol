"use client"

import Image from 'next/image'
import { useState } from 'react';

import flower1 from "@/public/flower1.png"
import img from "@/public/benefitsImg.jpg"

const Testimonial = ({ reverse, gradient }: { reverse: boolean; gradient: string }) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`
                  flex ${reverse ? "md:flex-row-reverse" : "md:flex-row"} 
                  flex-col justify-center items-center md:items-start gap-10 
                  py-6 px-4 rounded-2xl shadow-lg
                  transition-all duration-300 ease-in-out
                  ${isHovered ? "shadow-xl scale-[1.01]" : ""}
                  ${gradient === "right"
                    ? "bg-gradient-to-br from-amber-200 via-orange-400 to-orange-600"
                    : "bg-gradient-to-bl from-amber-100 via-orange-300 to-orange-500"
                }
                  w-[90%] md:w-[70%] relative overflow-hidden
              `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                alt="Decorative flower"
                className='absolute -left-20 -top-12 w-40 opacity-100 z-50'
                src={flower1}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-40 pointer-events-none" />

            <Image
                alt="Testimonial image"
                className="rounded-2xl w-[20rem] md:w-[35rem] 2xl:w-[40rem] shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02]"
                height={400}
                src={img}
                width={600}
            />

            <div className={`flex flex-col gap-5 md:w-[40%] items-center md:items-start relative z-10`}>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-inner">
                    <p className="md:text-md 2xl:text-lg text-center md:text-start text-white font-medium leading-relaxed">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate totam neque nulla architecto ex
                        officiis, eum error recusandae nostrum velit deleniti, molestias quam corporis placeat. Eaque dignissimos
                        reiciendis iste quam. Ut porro harum saepe. Repudiandae repellendus sapiente nesciunt ullam esse quia rem
                        non voluptates pariatur doloribus.
                    </p>
                </div>

                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-2 rounded-full px-4 self-center md:self-start">
                    <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-orange-800 font-bold">
                        C
                    </div>
                    <span className="text-white font-medium">Nombre de persona</span>
                </div>
            </div>
        </div>
    )
}

export default Testimonial

