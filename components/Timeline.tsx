"use client"
import { useState } from "react"
import Image from "next/image"

import { montserrat, playfairDisplay } from "@/utils/typographies"

interface TimelinePoint {
  id: number
  title: string
  description: string
}

const timelineData: TimelinePoint[] = [
  {
    id: 1,
    title: "El poder de transformar tu vida",
    description: "Transformacion personal y el poder de autocuración"
  },
  {
    id: 2,
    title: "El poder de un comienzo positivo",
    description: "Transformacion personal y el poder de autocuración"
  },
  {
    id: 3,
    title: "Dominá tu tiempo para nutrir tu vida",
    description: "Transformacion personal y el poder de autocuración"
  },
  {
    id: 4,
    title: "El poder de los antioxidantes",
    description: "Transformacion personal y el poder de autocuración"
  },
  {
    id: 5,
    title: "Revitalizá tus tardes",
    description: "Transformacion personal y el poder de autocuración"
  },
  {
    id: 6,
    title: "Hacele caso a tu reloj biológico",
    description: "Transformacion personal y el poder de autocuración"
  },
  {
    id: 7,
    title: "Compromiso con el cambio verdadero",
    description: "Transformacion personal y el poder de autocuración"
  },
]

const Timeline = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null)

  return (
    <div>
      <div className="px-4 py-2 md:py-16 md:mx-6 2xl:mx-auto 2xl:w-[80%]">
        <h2 className={` ${playfairDisplay.className} text-3xl md:text-5xl text-gray-700 text-center font-semibold md:mb-20`}>
          7 MÓDULOS 1 TRANSFORMACIÓN
        </h2>

        <div className="py-8">
          <div className="grid grid-cols-1 md:flex md:justify-between w-full gap-7 md:gap-0">
            {timelineData.map((point) => (
              <div
                key={point.id}
                className="flex flex-col items-center w-full md:w-1/7"
                onMouseEnter={() => setActivePoint(point.id)}
                onMouseLeave={() => setActivePoint(null)}
              >
                <div className="flex flex-col items-center">
                  <div className={`${playfairDisplay.className} text-5xl font-extralight text-orange-600 mb-2`}>
                    {point.id}
                  </div>
                  <p className="text-center w-44 min-h-[60px] flex items-center justify-center mt-2 text-lg text-gray-700">
                    {point.title}
                  </p>
                  <div className="w-10 border-t-2 border-gray-600 mt-3" />
                </div>

                <div className="mt-4 w-48 text-center">
                  <p className={`${montserrat.className} text-base font-normal text-orange-600`}>{point.description}</p>
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

