
import Image from "next/image";

import flower2 from "@/public/flower2.png"

interface Props {
    title: string;
    description: string;
    icon: React.ReactNode
}

const BenefitCard = ({ title, description, icon }: Props) => {
    return (
        <div className="bg-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4 group cursor-pointer relative z-20 overflow-visible">
            <Image
                alt="Decorative flower"
                className="absolute right-[-15px] bottom-[-15px] w-11 opacity-80 z-0 brightness-100 hue-rotate-[330deg] saturate-200"
                src={flower2}
            />
            <div className="flex-shrink-0 bg-[#fd9ef8] rounded-full w-12 h-12 flex items-center justify-center">
                {icon}
            </div>
            <div className="flex-grow relative z-10">
                <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    )
}

export default BenefitCard