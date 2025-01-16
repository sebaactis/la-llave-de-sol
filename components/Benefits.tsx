import Image from 'next/image'
import { Flower2 } from "lucide-react"

import BenefitCard from './BenefitCard'

import img from "@/public/benefitsImg.jpg"


const Benefits = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-light text-gray-800 mb-6">
              Activá el poder interior <br />y saná desde el alma
            </h1>
            <button className="bg-[#D8D3CC] text-gray-700 rounded-full px-6 py-4 text-sm hover:bg-[#C8C2BA] transition-colors duration-300">
              CONOCEME MÁS
            </button>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              alt="Relaxing candle setting"
              className="transform hover:scale-105 transition-transform duration-500"
              layout="fill"
              objectFit="cover"
              src={img}
            />
          </div>
        </div>

        <div className="space-y-4 lg:mt-48">
          <BenefitCard
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, consectetur adipis"
            icon={<Flower2 className="w-8 h-8 text-white" />}
            title="Lorem Ipsum"
          />
          <BenefitCard
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, consectetur adipis"
            icon={<Flower2 className="w-8 h-8 text-white" />}
            title="Lorem Ipsum"
          />
          <BenefitCard
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, consectetur adipis"
            icon={<Flower2 className="w-8 h-8 text-white" />}
            title="Lorem Ipsum"
          />
        </div>
      </div>
    </section>
  )
}

export default Benefits