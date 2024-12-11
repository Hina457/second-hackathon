

import chair1 from "@/Components/public/chair1.svg"
import Image from "next/image"
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { PiPlantLight } from "react-icons/pi";
import { RiBankCardLine } from "react-icons/ri";
import sofa from "@/Components/public/sofa234.svg"
import parent from "@/Components/public/parent2.svg"
import parent2 from "@/Components/public/parent3.svg"

export default function About() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between items-center mt-[100px] px-6 lg:px-[150px]">
                <div className="w-full lg:w-[619px] h-[478px] bg-[#007580] flex flex-col justify-center items-start">
                    <h1 className="font-semibold text-[32px] text-white mt-[60px] ml-[20px] lg:ml-[60px]">About Us - Comforty</h1>
                    <p className="font-normal text-[18px] text-white ml-[20px] lg:ml-[60px] mt-4 mb-6 lg:w-[495px]">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.</p>
                    <button className="w-[179px] h-[56px] ml-[20px] lg:ml-[64px] bg-[#098591] text-white mt-[20px] lg:mt-[130px]">View Collection</button>
                </div>
                <div className="w-full lg:w-[619px] mt-[70px] lg:mt-[100px]">
                    <Image src={chair1} alt="chair" width={480} height={478} className="mb-[16%]" />
                </div>
            </div>
            
            <h1 className="font-bold text-[32px] text-center mt-[40px]">What Makes Our Brand Different</h1>
            
            <div className="w-full mt-[40px]  h-[244px] text-[#007580] gap-[15px] py-6 flex justify-center items-center">
                {/* Add content or images here */}
                <div className="w-[309px] h-[244px] bg-[#F9F9F9]">
                <TbTruckDelivery className="mt-[30px] ml-[40px] w-[40px] h-[40px]"/>
                <p className="font-bold text-[20px] mt-[10px] ml-[40px]">Next day as standard</p>
                <p className="font-normal text-[16px] mt-[10px] ml-[40px]">Order before 3pm and get your order the next day as standard</p>
                </div>
                <div className="w-[309px] h-[244px] bg-[#F9F9F9]">
                <CiCircleCheck className=" mt-[30px] ml-[40px] w-[40px] h-[40px]" />
                <p className="font-bold text-[20px] mt-[10px] ml-[40px]">Made by true artisans</p>
                <p className="font-normal text-[16px] mt-[10px] ml-[40px]">Handmade crafted goods made with real passion and craftmanship</p>
                </div>
                <div className="w-[309px] h-[244px] bg-[#F9F9F9]">
                 <RiBankCardLine className=" mt-[30px] ml-[40px] w-[40px] h-[40px]" />
                 <p className="font-bold text-[20px] mt-[10px] ml-[40px]">Unbeatable prices</p>
                 <p className="font-normal text-[16px] mt-[10px] ml-[40px]">For our materials and quality you wont find better prices anywhere</p>
                </div>
                <div className="w-[309px] h-[244px] bg-[#F9F9F9]">
                <PiPlantLight className=" mt-[30px] ml-[40px] w-[40px] h-[40px]"/>
                <p className="font-bold text-[20px] mt-[10px] ml-[40px]">Recycled packaging</p>
                <p className="font-normal text-[16px] mt-[10px] ml-[40px]">We use 100% recycled to ensure our footprint is more manageable</p>
                </div>
                

            </div>
            {/* ouer popular product */}
            <h1 className="font-semibold ml-[12%] mt-[6%] text-[32px] text-[#272343]">Our Popular Products </h1>
            
            <div className="w-full mt-[40px]  h-auto mb-[70px]  text-[#007580] gap-[15px] py-6 flex justify-center items-center">
                <div className="w-[630px] h-[462px] ">
                    <Image src={sofa} alt="sofa"/>
                    <p className="font-normal text-[20px] text-[#2A254B] mt-[10px]">The Poplar suede sofa</p>
                    <p className="text-[#2A254B] mt-2">$99.00</p>
                </div>
                <div className="w-[305px] h-[462px] ">
                    <Image src={parent2} alt="sofa"/>

                    <p className="font-normal text-[20px] text-[#2A254B] mt-[10px]">The Dandy chair</p>
                    <p className="text-[#2A254B] mt-2">$99.00</p>
                </div>
                <div className="w-[305px] h-[462px] ">
                    <Image src={parent} alt="sofa3"/>
                    <p className="font-normal text-[20px] text-[#2A254B] mt-[10px]">The Dandy chair</p>
                    <p className="text-[#2A254B] mt-2">$99.00</p>
                </div>
            </div>
            
        </div>
    )
}
