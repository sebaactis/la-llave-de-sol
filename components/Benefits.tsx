import Image from 'next/image'
import { HeartPulse, BrainIcon, Handshake } from "lucide-react"

import BenefitCard from './BenefitCard'

import img from "@/public/benefitsImg.jpg"

const Benefits = () => {
  return (
    <section className="container mx-auto px-6 py-24 mt-20" id="benefits">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl mt-0 md:mt-20 2xl:mt-0">
            <Image
              alt="Relaxing candle setting"
              className="transform hover:scale-105 transition-transform duration-500"
              layout="fill"
              objectFit="cover"
              src={img}
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className='text-xl ml-1 font-semibold text-gray-700 italic text-center mb-5'>Unite a la experiencia de &quot;las 7 llaves&quot; para transformar tu relación con la comida y con vos mismo</p>
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