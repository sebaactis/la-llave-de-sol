import { montserrat } from "@/utils/typographies";

interface Props {
    title: string;
    description: string;
    icon: React.ReactNode
}

const BenefitCard = ({ title, description, icon }: Props) => {
    return (
        <div className="bg-[#fd9ef82e] rounded-2xl py-5 md:py-7 px-5 md:px-10 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4 group cursor-pointer relative z-20 overflow-visible">
            <div className="flex-shrink-0 bg-[#fd9ef8] rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                {icon}
            </div>
            <div className="flex-grow relative z-10">
                <h3 className={` ${montserrat.className} font-normal text-gray-800 mb-1 text-lg md:text-xl`}>{title}</h3>
                <p className={`${montserrat.className} text-gray-600 text-md md:text-lg leading-relaxed`}>{description}</p>
            </div>
        </div>
    )
}

export default BenefitCard