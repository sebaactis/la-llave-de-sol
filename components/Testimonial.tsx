"use client"

import { PlayCircle } from "lucide-react"
import Image from "next/image"

import { testimonialData } from "./Testimonials";

import { playfairDisplay } from "@/utils/typographies"

type Testimonial = (typeof testimonialData)[0];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
      <div className="flex flex-col items-center px-4 md:px-8 z-20">
        <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden mb-6 border-4 border-white">
          <Image
            fill
            alt={`Testimonio de ${testimonial.name}`}
            className="rounded-full"
            objectFit="cover"
            src={testimonial.img || "/placeholder.svg"}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
            <PlayCircle className="w-12 h-12 text-white" />
          </div>
        </div>
  
        <div className="max-w-md text-center">
          <h3 className={`${playfairDisplay.className} text-2xl font-bold text-white italic mb-2`}>
            Comida saludable que <span className="block">realmente satisface.</span>
          </h3>
  
          <p className="text-white mb-6 leading-relaxed">{testimonial.text}</p>
  
          <div className="inline-block border border-white/30 rounded-full px-8 py-2">
            <span className="text-white font-medium">— {testimonial.name}</span>
          </div>
        </div>
      </div>
    )
  }

export default TestimonialCard
