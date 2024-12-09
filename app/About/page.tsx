

import chair1 from "@/Components/public/chair1.svg"
import Image from "next/image"

export default function About() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between items-center mt-[100px] px-6 lg:px-[150px]">
                <div className="w-full lg:w-[619px] h-[478px] bg-[#007580] flex flex-col justify-center items-start">
                    <h1 className="font-semibold text-[32px] text-white mt-[60px] ml-[20px] lg:ml-[60px]">About Us - Comforty</h1>
                    <p className="font-normal text-[18px] text-white ml-[20px] lg:ml-[60px] mt-4 mb-6 lg:w-[495px]">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.</p>
                    <button className="w-[179px] h-[56px] ml-[20px] lg:ml-[64px] bg-[#098591] text-white mt-[20px] lg:mt-[130px]">View Collection</button>
                </div>
                <div className="w-full lg:w-[619px] mt-[40px] lg:mt-[100px]">
                    <Image src={chair1} alt="chair" width={480} height={478} />
                </div>
            </div>
            
            <h1 className="font-bold text-[32px] text-center mt-[40px]">What Makes Our Brand Different</h1>
            
            <div className="w-full mt-[40px] bg-red-500 py-6 flex justify-center items-center">
                {/* Add content or images here */}
            </div>
        </div>
    )
}
