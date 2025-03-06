
import Testimonial from "./Testimonial"

import { playfairDisplay } from "@/utils/typographies"

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className='py-20 w-[80%] m-auto flex flex-col justify-center items-center gap-10 '>
        <h2 className={`${playfairDisplay.className} text-3xl md:text-4xl font-bold text-orange-800 text-center md:text-start`}>TESTIMONIOS DE LA EXPERIENCIA</h2>
        <div className="h-1 w-20 bg-orange-400 mx-auto rounded-full mb-6" />
      </div>
      <article className="flex flex-col gap-28 py-3 rounded-md items-center justify-center relative">
        
        <Testimonial gradient="right" reverse={false} />
        <Testimonial gradient="left" reverse={true} />
        <Testimonial gradient="right" reverse={false} />
      </article>
    </section>
  )
}

export default Testimonials