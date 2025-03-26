/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
"use client"

import { useState } from "react"
import { PlayCircle } from "lucide-react" // Assuming this is imported from a fonts file

import { playfairDisplay } from "@/utils/typographies"

interface Testimonial {
  name: string
  text: string
  img?: string
  video?: string
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  // Estado para rastrear si el video está reproduciéndose
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="flex flex-col items-center px-4 md:px-8 z-20">
      <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden mb-6 border-4 border-gray-600">
        <video
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-full"
          src={testimonial.video || "/placeholder-video.mp4"}
          onClick={(e) => {
            const video = e.currentTarget

            if (video.paused) {
              video.play().catch(() => {
                console.log("El video no se puede reproducir.")
              })
              setIsPlaying(true)
            } else {
              video.pause()
              setIsPlaying(false)
            }
          }}
        />

        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${isPlaying ? "opacity-0 " : "opacity-100 hover:opacity-0"
            } cursor-pointer`}
          onClick={(e) => {
            // Encuentra el elemento de video y dispara su evento onClick
            const video = e.currentTarget.previousElementSibling as HTMLVideoElement | null
            if (video) {
              video.click() // Simula un clic en el video
            }
          }}
        >
          {!isPlaying && <PlayCircle className="w-12 h-12 text-gray-600" />}
        </div>
      </div>

      {/* Contenido del Testimonio */}
      <div className="max-w-md text-center">
        <h3 className={`${playfairDisplay.className} text-2xl font-bold text-gray-600 italic mb-2`}>
          Comida saludable que <span className="block">realmente satisface.</span>
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>

        <div className="inline-block border border-gray-600/70 rounded-full px-8 py-2">
          <span className="text-gray-600 font-medium">— {testimonial.name}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard