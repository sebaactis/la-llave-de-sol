"use client"

import Image from 'next/image'
import { HeartPulse, BrainIcon, Handshake } from "lucide-react"
import { useState, useEffect } from 'react'

import BenefitCard from './BenefitCard'

import img from "@/public/lallave1.png"
import img2 from "@/public/lallave2.png"
import img3 from "@/public/lallave3.png"
import img4 from "@/public/lallave4.png"
import img5 from "@/public/lallave5.png"
import img6 from "@/public/lallave6.png"
import { montserrat, playfairDisplay } from '@/utils/typographies'

const Benefits = () => {
  const images = [img, img2, img3, img4, img5, img6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="mt-20 pb-10 bg-[#fcebe1] mx-3 md:mx-0" id="benefits">
      <p className={` ${playfairDisplay.className} text-3xl md:text-5xl text-gray-700 text-center font-semibold`}>UNITE A LA EXPERIENCIA</p>
      <p className={`${montserrat.className} text-xl md:text-2xl font-light text-center pb-7 pt-2`}>Transformá tu relación con la comida y con vos mismo</p>
      <div className="grid lg:grid-cols-2 gap-12  items-center">
        <div className="space-y-8">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:rounded-none md:rounded-r-2xl mt-0 md:mt-20 2xl:mt-0 group">
            {images.map((image, index) => (
              <Image
                key={index}
                alt={`Imagen de beneficios ${index + 1}`}
                className={`transform transition-all duration-700 ease-in-out absolute inset-0 ${index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                layout="fill"
                objectFit="cover"
                src={image}
              />
            ))}

            <button
              aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </button>

            <button
              aria-label="Imagen siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </button>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-orange-500 w-4' : 'bg-white/60'
                    }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 md:mr-5">
          <BenefitCard
            description="Recetas prácticas y simples que podrás hacer en 5 minutos para resolver tu día de manera espectacular."
            icon={<HeartPulse className="w-8 h-8 text-white" />}
            title="Aprenderas a cocinar sin azúcar y sin glúten. Fácil y rápido."
          />
          <BenefitCard
            description="
                    Te enseño que le pasa a tu cerebro, tu intestino y tu energía cuando consumís azúcar y glúten."
            icon={<BrainIcon className="w-8 h-8 text-white" />}
            title="Descubrirás como el azúcar impacta en tu cuerpo y en tu mente."
          />
          <BenefitCard
            description="A través de ejercicios prácticos, desbloquea hábitos y emociones que hoy te alejan del bienestar. "
            icon={<Handshake className="w-8 h-8 text-white" />}
            title="Conectarás con lo nos nutre DENTRO y FUERA de tu plato."
          />
        </div>
      </div>
    </section>
  )
}

export default Benefits