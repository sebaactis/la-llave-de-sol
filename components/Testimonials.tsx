"use client"

import { useState, useEffect } from "react"


import TestimonialCard from "./Testimonial"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { playfairDisplay } from "@/utils/typographies"


export const testimonialData = [
  {
    id: 1,
    text: "Eaque dignissimos reiciendis iste quam. Ut porro harum saepe. Repudiandae repellendus sapiente nesciunt ullam esse quia rem non voluptates pariatur doloribus.",
    name: "Nombre Persona",
    initial: "C",
    img: "/placeholder.svg?height=400&width=300",
    video: "https://storage.googleapis.com/msgsndr/XbIroeCo43YzroXkLcgO/media/67289aa684cd8364415c81f7.mp4"
  },
  {
    id: 2,
    text: "Eaque dignissimos reiciendis iste quam. Ut porro harum saepe. Repudiandae repellendus sapiente nesciunt ullam esse quia rem non voluptates pariatur doloribus.",
    name: "Nombre Persona",
    initial: "O",
    img: "/placeholder.svg?height=400&width=300",
    video: "https://storage.googleapis.com/msgsndr/XbIroeCo43YzroXkLcgO/media/67289aa684cd8364415c81f7.mp4"
  },
  {
    id: 3,
    text: "Eaque dignissimos reiciendis iste quam. Ut porro harum saepe. Repudiandae repellendus sapiente nesciunt ullam esse quia rem non voluptates pariatur doloribus.",
    name: "Nombre Persona",
    initial: "T",
    img: "/placeholder.svg?height=400&width=300",
    video: "https://storage.googleapis.com/msgsndr/XbIroeCo43YzroXkLcgO/media/67289aa684cd8364415c81f7.mp4"
  },
  {
    id: 4,
    text: "Eaque dignissimos reiciendis iste quam. Ut porro harum saepe. Repudiandae repellendus sapiente nesciunt ullam esse quia rem non voluptates pariatur doloribus.",
    name: "Nombre Persona",
    initial: "T",
    img: "/placeholder.svg?height=400&width=300",
    video: "https://storage.googleapis.com/msgsndr/XbIroeCo43YzroXkLcgO/media/67289aa684cd8364415c81f7.mp4"
  },
  {
    id: 5,
    text: "Eaque dignissimos reiciendis iste quam. Ut porro harum saepe. Repudiandae repellendus sapiente nesciunt ullam esse quia rem non voluptates pariatur doloribus.",
    name: "Nombre Persona",
    initial: "T",
    img: "/placeholder.svg?height=400&width=300",
    video: "https://storage.googleapis.com/msgsndr/XbIroeCo43YzroXkLcgO/media/67289aa684cd8364415c81f7.mp4"
  },
  {
    id: 6,
    text: "Eaque dignissimos reiciendis iste quam. Ut porro harum saepe. Repudiandae repellendus sapiente nesciunt ullam esse quia rem non voluptates pariatur doloribus.",
    name: "Nombre Persona",
    initial: "T",
    img: "/placeholder.svg?height=400&width=300",
    video: "https://storage.googleapis.com/msgsndr/XbIroeCo43YzroXkLcgO/media/67289aa684cd8364415c81f7.mp4"
  },
]

export default function TestimonialsSection() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="bg-[#fd9ef8a2] py-16 md:pt-20 relative" id="testimonials">
  <div className="mx-auto">
    
    <div className="mb-12 md:mb-24 flex flex-col justify-center items-center gap-3">
      <h2 className={`${playfairDisplay.className} text-3xl md:text-4xl font-bold text-gray-600 text-center`}>
        TESTIMONIOS DE LA EXPERIENCIA
      </h2>
      <div className="h-1 w-20 bg-gray-600 mx-auto rounded-full" />
    </div>

    <div className="relative">
      <Carousel
        className="w-full"
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {testimonialData.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 flex justify-center w-[100%]">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center mt-20">
          <CarouselPrevious className="mt-3 relative h-11 w-11 rounded-full border-gray-600 text-gray-600 bg-white/20 hover:bg-white/40 hover:text-gray-600" />
          <div className="flex gap-1 text-gray-600 text-lg -mx-6">
            <span>{current}</span>
            <span>/</span>
            <span>{count}</span>
          </div>
          <CarouselNext className="mt-3 relative h-11 w-11 rounded-full border-gray-600 text-gray-600 bg-white/20 hover:bg-white/40 hover:text-gray-600" />
        </div>
      </Carousel>
    </div>
  </div>

</section>
  )
}