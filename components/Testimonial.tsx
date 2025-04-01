/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
"use client"

import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

import { playfairDisplay } from "@/utils/typographies"

interface Testimonial {
  name: string
  text: string
  img?: string | StaticImport
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  

  return (
    <div className="flex flex-col items-center px-4 md:px-8 z-20">
      <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden mb-6 ">

        <Image
          alt="Imagen testimonio"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={testimonial.img || "/defaultImage.jpg"}
        />
      </div>

      <div className="max-w-md text-center">
        <h3 className={`${playfairDisplay.className} text-2xl font-bold text-gray-800 italic mb-2`}>
          Comida saludable que <span className="block">realmente satisface.</span>
        </h3>

        <p className="text-gray-800 mb-6 leading-relaxed">{testimonial.text}</p>

        <div className="inline-block border border-gray-800/70 rounded-full px-8 py-2">
          <span className="text-gray-800 font-medium">— {testimonial.name}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard