"use client"

import { useState } from "react"
import Image from "next/image"

import { playfairDisplay } from "@/utils/typographies"
import keyOrange from "@/public/llaveNaranja.png"
import keyRed from "@/public/llaveRoja.png"
import keyGreen from "@/public/llaveVerde.png"
import keyPink from "@/public/llaveRosa.png"



interface TimelinePoint {
  id: number
  title: string
  description: string
}

const timelineData: TimelinePoint[] = [
  {
    id: 1,
    title: "El poder de transformar tu vida",
    description: "Mi transformacion personal y el poder de autocuración",
  },
  {
    id: 2,
    title: "El poder de un comienzo positivo",
    description: "El poder de transformar tu vida",
  },
  {
    id: 3,
    title: "Dominá tu tiempo para nutrir tu vid",
    description: "El poder de transformar tu vida",
  },
  {
    id: 4,
    title: "El poder de los antioxidante",
    description: "Tus aliados de cada día",
  },
  {
    id: 5,
    title: "Revitalizá tus tardes",
    description: "El poder de transformar tu vida",
  },
  {
    id: 6,
    title: "Hacele caso a tu reloj biológico",
    description: "El poder de transformar tu vida",
  },
  {
    id: 7,
    title: "Compromiso con el cambio verdadero",
    description: "El poder de transformar tu vida",
  }
]

const Timeline = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null)

  return (
    <div className="w-[80%] mx-auto px-4 py-16">
      <h2 className={`${playfairDisplay.className} text-5xl font-bold text-[#ffaa50] text-center mb-16`}>
        LAS 7 LLAVES
      </h2>

      <div className="relative py-80
      ">
        {/* Timeline line */}
        <div className="absolute left-0 right-0 h-0.5 bg-[#FF972A] z-0" style={{ top: "50%" }} />

        {/* Timeline points */}
        <div className="flex justify-between relative z-10">
          {timelineData.map((point, index) => {
            const isAbove = index % 2 === 0 // Alternating pattern: first above, second below, etc.
            const keyDistance = isAbove ? -130 : 80 // Distance from timeline to key
            const lineStart = isAbove ? -5 : 5 // Small gap from timeline
            const lineEnd = isAbove ? -65 : 65 // Small gap before key

            return (
              <div
                key={point.id}
                className="flex flex-col items-center relative"
                onMouseEnter={() => setActivePoint(point.id)}
                onMouseLeave={() => setActivePoint(null)}
              >

                <div
                  className={`w-0.5 absolute left-1/2 -translate-x-1/2 transition-colors duration-300 ${activePoint === point.id ? "bg-[#FF972A]" : "bg-[#FF972A]"
                    }`}
                  style={{
                    top: "50%",
                    height: isAbove ? "60px" : "60px",
                    transform: `translateY(${lineStart}px)`,
                    marginTop: isAbove ? lineEnd : 0,
                    marginBottom: isAbove ? 0 : lineEnd,
                  }}
                />

                <div
                  className={`w-28 h-28 md:w-36 md:h-36 ${isAbove && "-mt-24"} overflow-hidden transition-all duration-300 absolute left-1/2 -translate-x-1/2 `}
                  style={{
                    top: `calc(50% + ${keyDistance}px)`,
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      fill
                      alt={point.title}
                      className="transition-all duration-300 hover:scale-110 hover:brightness-75 hover:contrast-125 hover:-hue-rotate-30"
                      src={keyPink}
                    />
                  </div>
                </div>

                <div
                  className={`absolute w-64 
                     bg-white/30  rounded-lg p-4 shadow-lg transition-all duration-400 ${activePoint === point.id ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    [isAbove ? "bottom" : "top"]: isAbove ? "230px" : "230px",
                  }}
                >
                  <h3 className={`${playfairDisplay.className} text-xl font-bold text-[#FF972A] mb-2 text-center`}>{point.title}</h3>
                  <p className="text-gray-800 text-sm text-center">{point.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Timeline

