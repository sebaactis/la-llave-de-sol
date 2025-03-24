
import Testimonial from "./Testimonial"

import { playfairDisplay } from "@/utils/typographies"

const Testimonials = () => {
  return (
    <section className="bg-[#FF972A] pb-10" id="testimonials">
      <div className='pt-20 pb-10 w-[100%] m-auto flex flex-col justify-center items-center gap-3'>
        <h2 className={`${playfairDisplay.className} text-3xl md:text-4xl font-bold text-white text-center md:text-start`}>TESTIMONIOS DE LA EXPERIENCIA</h2>
        <div className="h-1 w-20 bg-white mx-auto rounded-full mb-6" />
      </div>
      <article className="flex flex-col gap-5 items-center justify-center">
        <Testimonial reverse={false} />
        <Testimonial reverse={true} />
        <Testimonial reverse={false} />
      </article>
    </section>
  )
}

export default Testimonials