import Image from 'next/image'

import img from "@/public/benefitsImg.jpg"

const Testimonial = ({ reverse, gradient }: { reverse: Boolean, gradient: string }) => {
    return (
        <div className={`flex ${reverse ? "md:flex-row-reverse" : "md:flex-row"} flex-col justify-center items-center md:items-start  gap-10 py-6 rounded-2xl ${gradient === "right" ? "bg-gradient-to-br" : "bg-gradient-to-bl"} from-orange-300 via-orange-500 to-orange-600 w-[90%] md:w-[70%]`}>
            <Image alt="imagen testimonio" className='rounded-2xl w-[20rem] md:w-[35rem] 2xl:w-[40rem]' src={img} />
            <div className={`flex flex-col gap-5 md:w-[40%] items-center md:items-start`}>
                <p className='md:text-md 2xl:text-lg text-center md:text-start mx-3 md:mx-0 p-2 rounded-lg text-white '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate totam neque nulla architecto ex officiis, eum error recusandae nostrum velit deleniti, molestias quam corporis placeat. Eaque dignissimos reiciendis iste quam.
                    Ut porro harum saepe. Repudiandae repellendus sapiente nesciunt ullam esse quia rem non voluptates pariatur doloribus, ab libero at hic facere mollitia fuga, culpa quae quidem, iste laudantium dolores ipsa! culpa quae quidem, iste laudantium dolores ipsa! culpa quae quidem, iste laudantium dolores ipsa! culpa quae quidem, iste laudantium dolores ipsa! culpa quae quidem, iste laudantium dolores ipsa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
        </div>
    )
}

export default Testimonial