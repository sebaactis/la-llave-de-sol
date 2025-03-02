import Testimonial from "./Testimonial"

import { playfairDisplay } from "@/utils/typographies"

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className='py-20 w-[80%] m-auto flex flex-col justify-center items-center gap-10 '>
        <h2 className={`${playfairDisplay.className} text-3xl font-bold text-black/60 text-center md:text-start`}>TESTIMONIOS DE LA EXPERIENCIA</h2>
        <div className='border-b-1 border-black/50 w-[15rem] md:w-[30rem]' />
      </div>
      <article className="flex flex-col gap-28 py-3 rounded-md items-center justify-center">
        <Testimonial gradient="right" reverse={false} />
        <Testimonial gradient="left" reverse={true} />
        <Testimonial gradient="right" reverse={false} />
      </article>
    </section>
  )
}

export default Testimonials