

import chair1 from "@/components/public/chair1.svg"
import Image from "next/image"
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { PiPlantLight } from "react-icons/pi";
import { RiBankCardLine } from "react-icons/ri";
import sofa from "@/components/public/sofa234.svg"
import parent2 from "@/components/public/parent2.svg"
import parent3 from "@/components/public/parent3.svg"

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
                    <Image src={chair1} alt="chair" width={480} height={400} className="mb-[17%] " />
                </div>
            </div>
            {/* next */}
            <h1 className="font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-center mt-[20px] sm:mt-[30px] lg:mt-[40px]">
  What Makes Our Brand Different
</h1>

<div className="w-full mt-[20px] sm:mt-[30px] lg:mt-[40px] text-[#007580] gap-4 sm:gap-6 lg:gap-[15px] py-6 flex flex-wrap justify-center items-center">
  {/* Card 1 */}
  <div className="w-[90%] sm:w-[45%] lg:w-[309px] h-auto lg:h-[244px] bg-[#F9F9F9] p-6 flex flex-col items-start">
    <TbTruckDelivery className="w-[40px] h-[40px] text-[#007580] mb-4" />
    <p className="font-bold text-[18px] sm:text-[20px] mb-2">Next day as standard</p>
    <p className="font-normal text-[14px] sm:text-[16px]">
      Order before 3pm and get your order the next day as standard
    </p>
  </div>

  {/* Card 2 */}
  <div className="w-[90%] sm:w-[45%] lg:w-[309px] h-auto lg:h-[244px] bg-[#F9F9F9] p-6 flex flex-col items-start">
    <CiCircleCheck className="w-[40px] h-[40px] text-[#007580] mb-4" />
    <p className="font-bold text-[18px] sm:text-[20px] mb-2">Made by true artisans</p>
    <p className="font-normal text-[14px] sm:text-[16px]">
      Handmade crafted goods made with real passion and craftmanship
    </p>
  </div>

  {/* Card 3 */}
  <div className="w-[90%] sm:w-[45%] lg:w-[309px] h-auto lg:h-[244px] bg-[#F9F9F9] p-6 flex flex-col items-start">
    <RiBankCardLine className="w-[40px] h-[40px] text-[#007580] mb-4" />
    <p className="font-bold text-[18px] sm:text-[20px] mb-2">Unbeatable prices</p>
    <p className="font-normal text-[14px] sm:text-[16px]">
      For our materials and quality you wont find better prices anywhere
    </p>
  </div>

  {/* Card 4 */}
  <div className="w-[90%] sm:w-[45%] lg:w-[309px] h-auto lg:h-[244px] bg-[#F9F9F9] p-6 flex flex-col items-start">
    <PiPlantLight className="w-[40px] h-[40px] text-[#007580] mb-4" />
    <p className="font-bold text-[18px] sm:text-[20px] mb-2">Recycled packaging</p>
    <p className="font-normal text-[14px] sm:text-[16px]">
      We use 100% recycled to ensure our footprint is more manageable
    </p>
  </div>
</div>

            {/* our popular product */}
            <h1 className="font-semibold text-center sm:text-left sm:ml-[12%] mt-[4%] sm:mt-[6%] text-[24px] sm:text-[28px] lg:text-[32px] text-[#272343]">
  Our Popular Products
</h1>

<div className="w-full mt-[20px] sm:mt-[40px] h-auto mb-[40px] sm:mb-[70px] text-[#007580] gap-4 sm:gap-[15px] py-6 flex flex-wrap justify-center items-center">
  {/* Product 1 */}
  <div className="w-[90%] sm:w-[48%] lg:w-[630px] h-auto flex flex-col items-center">
    <Image src={sofa} alt="sofa" className="w-full h-auto" />
    <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#2A254B] mt-[10px] text-center">
      The Poplar suede sofa
    </p>
    <p className="text-[#2A254B] mt-2 text-[14px] sm:text-[16px] lg:text-[18px]">$99.00</p>
  </div>

  {/* Product 2 */}
  <div className="w-[90%] sm:w-[48%] lg:w-[305px] h-auto flex flex-col items-center">
    <Image src={parent2} alt="sofa2" className="w-full h-auto" />
    <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#2A254B] mt-[10px] text-center">
      The Dandy chair
    </p>
    <p className="text-[#2A254B] mt-2 text-[14px] sm:text-[16px] lg:text-[18px]">$99.00</p>
  </div>

  {/* Product 3 */}
  <div className="w-[90%] sm:w-[48%] lg:w-[305px] h-auto flex flex-col items-center">
    <Image src={parent3} alt="sofa3" className="w-full h-auto" />
    <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#2A254B] mt-[10px] text-center">
      The Dandy chair
    </p>
    <p className="text-[#2A254B] mt-2 text-[14px] sm:text-[16px] lg:text-[18px]">$99.00</p>
  </div>
</div>
</div>

    )
}
