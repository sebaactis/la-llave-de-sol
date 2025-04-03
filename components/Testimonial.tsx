/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
"use client"

import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { montserrat } from "@/utils/typographies"

interface Testimonial {
  name: string
  text: string
  img?: string | StaticImport
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {


  return (
    <div className="flex flex-col items-center px-4 md:px-8 z-20">
      <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden mb-6">
        <Image
          alt="Imagen testimonio"
          layout="fill"
          objectFit="cover"
          src={testimonial.img || "/defaultImage.jpg"}
        />
      </div>

      <div className="max-w-md text-center flex flex-col min-h-[200px]">
        <p className={`${montserrat.className} text-white mb-6 leading-normal text-lg mx-2 mt-5 italic`}>
          “{testimonial.text}”
        </p>

        <div className="inline-block border border-white-800/70 rounded-full py-2 mt-auto w-52 mx-auto">
          <span className="text-white font-medium">— {testimonial.name}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard