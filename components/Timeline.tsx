"use client"
import { useState } from "react"
import Image from "next/image"

import { montserrat, playfairDisplay } from "@/utils/typographies"
import keyOrange from "@/public/llaveNaranja.png"
import keyRed from "@/public/llaveRoja.png"
import keyGreen from "@/public/llaveVerde.png"
import keyPink from "@/public/llaveRosa.png"

interface TimelinePoint {
  id: number
  label: string
  keyImage: any
}

const timelineData: TimelinePoint[] = [
  {
    id: 1,
    label: "El poder de transformar tu vida",
    keyImage: keyOrange,
  },
  {
    id: 2,
    label: "El poder de un comienzo positivo",
    keyImage: keyRed,
  },
  {
    id: 3,
    label: "Dominá tu tiempo para nutrir tu vida",
    keyImage: keyGreen,
  },
  {
    id: 4,
    label: "El poder de los antioxidantes",
    keyImage: keyPink,
  },
  {
    id: 5,
    label: "Revitalizá tus tardes",
    keyImage: keyOrange,
  },
  {
    id: 6,
    label: "Hacele caso a tu reloj biológico",
    keyImage: keyRed,
  },
  {
    id: 7,
    label: "Compromiso con el cambio verdadero",
    keyImage: keyGreen,
  },
]

const Timeline = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null)

  return (
    <div className="px-4 py-16 md:mx-6 2xl:mx-auto 2xl:w-[80%]">
      <h2 className={`${playfairDisplay.className} mb-16 text-center text-5xl font-bold text-[#ffaa50] md:mb-28`}>
        LAS 7 LLAVES
      </h2>

      <div className="relative md:hidden">
        <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-600" />

        <div className="flex flex-col space-y-16">
          {timelineData.map((point) => (
            <div
              key={point.id}
              className="flex items-center"
              onMouseEnter={() => setActivePoint(point.id)}
              onMouseLeave={() => setActivePoint(null)}
            >
              <div className="flex flex-col -mt-12">
                <div
                  className={`${playfairDisplay.className} -ml-5 flex h-16 w-16 items-center justify-center rounded-full border-gray-600 text-4xl text-gray-600`}
                >
                  {point.id}
                </div>

                <div className="h-0.5 w-12 bg-gray-600" />

              </div>
              <div className="flex items-center">
                <div className="h-32 w-32 overflow-hidden">
                  <Image
                    alt={point.label}
                    className="transition-all duration-300 hover:scale-110"
                    src={point.keyImage || "/placeholder.svg"}
                  />
                </div>

                <div className="mt-2 w-48">
                  <p className={`${montserrat.className} text-md font-medium text-gray-700 w-[90%]`}>{point.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden py-14 md:block">
        <div className="h-0.5 bg-gray-600" />

        <div className="flex justify-between">
          {timelineData.map((point) => (
            <div
              key={point.id}
              className="flex flex-col items-center"
              onMouseEnter={() => setActivePoint(point.id)}
              onMouseLeave={() => setActivePoint(null)}
            >
              <div className={`${playfairDisplay.className} -mt-20 mb-10 text-5xl text-gray-600`}>{point.id}</div>

              <div className="h-14 w-[0.12rem] -mt-6 bg-gray-600" />

              <div className="mt-4 h-32 w-32 overflow-hidden">
                <Image
                  alt={point.label}
                  className="transition-all duration-300 hover:scale-110"
                  src={point.keyImage || "/placeholder.svg"}
                />
              </div>

              <div className="mt-2 w-48 text-center">
                <p className={`${montserrat.className} text-md font-medium text-gray-700`}>{point.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline

