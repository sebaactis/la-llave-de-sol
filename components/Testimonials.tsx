import Testimonial from "./Testimonial"

const Testimonials = () => {
  return (
    <section>
      <div className='py-20 w-[80%] m-auto flex flex-col justify-center items-center gap-10 '>
        <h2 className='text-2xl font-bold text-black/60 text-center md:text-start'>TESTIMONIOS DE LA EXPERIENCIA</h2>
        <div className='border-b-1 border-black/50 w-[15rem] md:w-[30rem]' />
      </div>
      <article className="flex flex-col gap-28">
        <Testimonial reverse={false} />
        <Testimonial reverse={true} />
        <Testimonial reverse={false} />
      </article>
    </section>
  )
}

export default Testimonials