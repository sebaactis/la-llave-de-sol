import Image from 'next/image'

import img from "@/public/benefitsImg.jpg"

const Testimonial = ({ reverse }: { reverse: Boolean }) => {
    return (
        <div className={`flex ${reverse ? "md:flex-row-reverse" : "md:flex-row"} flex-col justify-center items-center md:items-start gap-10`}>
            <Image alt="imagen testimonio" className='rounded-md w-[23rem] md:w-[40rem] 2xl:w-[50rem]' src={img} />
            <div className='flex flex-col gap-5 md:w-[40%] items-center md:items-start'>
                <h4 className='text-2xl font-semibold'>Titulo del testimonio</h4>
                <p className='md:text-md 2xl:text-lg font-light text-center md:text-start mx-3 md:mx-0 w-[90%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate totam neque nulla architecto ex officiis, eum error recusandae nostrum velit deleniti, molestias quam corporis placeat. Eaque dignissimos reiciendis iste quam.
                    Ut porro harum saepe. Repudiandae repellendus sapiente nesciunt ullam esse quia rem non voluptates pariatur doloribus, ab libero at hic facere mollitia fuga, culpa quae quidem, iste laudantium dolores ipsa! culpa quae quidem, iste laudantium dolores ipsa! culpa quae quidem, iste laudantium dolores ipsa! culpa quae quidem, iste laudantium dolores ipsa! culpa quae quidem, iste laudantium dolores ipsa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, ullam. Asperiores, illo, praesentium quia, dolores debitis ratione corporis cum nihil velit mollitia inventore impedit ipsa facilis eligendi omnis! Distinctio, et! </p>
            </div>
        </div>
    )
}

export default Testimonial