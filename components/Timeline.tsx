"use client"
import { useState } from "react"
import Image from "next/image"

import { montserrat, playfairDisplay } from "@/utils/typographies"
import logo from "@/public/logo.png"
import keyRose from "@/public/keyRose.png"
import keyGreen from "@/public/keyGreen.png"
import keyYellow from "@/public/keyYellow.png"

interface TimelinePoint {
  id: number
  label: string
  keyImage: any
  size: number
  hw: number
}

const timelineData: TimelinePoint[] = [
  {
    id: 1,
    label: "El poder de transformar tu vida",
    keyImage: keyYellow,
    size: 4,
    hw: 32
  },
  {
    id: 2,
    label: "El poder de un comienzo positivo",
    keyImage: keyRose,
    size: 4.4,
    hw: 32
  },
  {
    id: 3,
    label: "Dominá tu tiempo para nutrir tu vida",
    keyImage: keyGreen,
    size: 4.4,
    hw: 32
  },
  {
    id: 4,
    label: "El poder de los antioxidantes",
    keyImage: keyYellow,
    size: 4,
    hw: 32
  },
  {
    id: 5,
    label: "Revitalizá tus tardes",
    keyImage: logo,
    size: 1,
    hw: 32
  },
  {
    id: 6,
    label: "Hacele caso a tu reloj biológico",
    keyImage: keyRose,
    size: 4.4,
    hw: 32
  },
  {
    id: 7,
    label: "Compromiso con el cambio verdadero",
    keyImage: keyGreen,
    size: 4.4,
    hw: 32
  },
]

const Timeline = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null)

  return (
    <div className="bg-[#e3dac9a3]">
      <div className="px-4 py-16 md:mx-6 2xl:mx-auto 2xl:w-[80%]">
        <h2 className={`${playfairDisplay.className} mb-16 text-center text-5xl font-bold text-[#ffaa50] md:mb-40`}>
          LAS 7 LLAVES
        </h2>

        {/* MOBILE */}
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
                      className={`transition-all duration-300 hover:scale-110`}
                      src={point.keyImage || "/placeholder.svg"}
                      style={{ marginTop: `-${point.size}rem` }}
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

        {/* DESKTOP */}
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
                <div className="flex justify-center -mt-36 ml-2">
                  <div className={`${playfairDisplay.className} text-5xl text-gray-600 -mr-7`}>{point.id}</div>
                  <div 
                  className="h-32 w-32 overflow-hidden"
                  >
                    <Image
                      alt={point.label}
                      className={`transition-all duration-300 hover:scale-110`}
                      src={point.keyImage || "/placeholder.svg"}
                      style={{ marginTop: `-${point.size}rem` }}
                    />
                  </div>
                </div>

                <div className="h-14 w-0.5 bg-gray-600 -mt-3" />

                <div className="mt-2 w-48 text-center">
                  <p className={`${montserrat.className} text-md font-medium text-gray-700`}>{point.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline

