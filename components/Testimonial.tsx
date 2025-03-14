"use client"

import Image from "next/image"
import { Quote } from "lucide-react"

import img from "@/public/benefitsImg.jpg"

const Testimonial = ({ reverse }: { reverse: boolean }) => {

    return (
        <div
            className={`
                  flex ${reverse ? "md:flex-row-reverse" : "md:flex-row"} 
                  flex-col justify-center items-center md:items-start gap-10 md:gap-28 
                  py-6 md:px-4
                  transition-all duration-300 ease-in-out
                  w-[90%] md:w-[70%] relative overflow-hidden
              `}>

            <div className="relative aspect-[4/3] w-[100%] md:w-[50%] overflow-hidden rounded-2xl mt-0 md:mt-20 2xl:mt-0">
                <Image
                    alt="Testimonial image"
                    className="rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02] w-full"
                    layout="fill"
                    objectFit="cover"
                    src={img}
                />
            </div>

            <div className={`flex flex-col gap-5 w-[100%] md:w-[40%] items-center md:items-start relative z-10 bg-slate-100/10 px-2 py-5 rounded-xl`}>
                <div className="p-4">
                    <Quote className="text-white/70 absolute left-1 md:-left-4 -top-3 md:-top-4 w-8 h-8 md:w-12 md:h-12" />
                    <p className="md:text-md 2xl:text-lg text-center md:text-start text-white font-medium leading-relaxed">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate totam neque nulla architecto ex
                        officiis, eum error recusandae nostrum velit deleniti, molestias quam corporis placeat. Eaque dignissimos
                        reiciendis iste quam. Ut porro harum saepe. Repudiandae repellendus sapiente nesciunt ullam esse quia rem
                        non voluptates pariatur doloribus.
                    </p>
                </div>

                <div className="w-72 md:w-96 h-0.5 bg-gradient-to-r from-white/40 to-transparent ml-6" />

                <div className="flex items-center gap-3 p-2 px-4 self-center md:self-start">
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
