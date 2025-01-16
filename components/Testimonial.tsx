import Image from 'next/image'

import img from "@/public/benefitsImg.jpg"

const Testimonial = ({ reverse }: { reverse: Boolean }) => {
    return (
        <div className={`flex ${reverse ? "flex-row-reverse" : ""} justify-center gap-20`}>
            <Image className='rounded-md w-[35rem]' src={img} />
            <div className='flex flex-col gap-4 w-[30%]'>
                <h4 className='text-2xl font-semibold'>Titulo del testimonio</h4>
                <p className='text-lg font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate totam neque nulla architecto ex officiis, eum error recusandae nostrum velit deleniti, molestias quam corporis placeat. Eaque dignissimos reiciendis iste quam.
                    Ut porro harum saepe. Repudiandae repellendus sapiente nesciunt ullam esse quia rem non voluptates pariatur doloribus, ab libero at hic facere mollitia fuga, culpa quae quidem, iste laudantium dolores ipsa!</p>
            </div>
        </div>
    )
}

export default Testimonial