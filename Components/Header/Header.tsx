
import React from "react"
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import alert from "@/Components/public/alertcircle.svg"
import vector from "@/Components/public/Vector.svg"
import logo from "@/Components/public/logo.svg"
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
export default function Header(){
    return(
        <div>

            {/* first header */}
            <div className="w-[1920px] h-[45px] justify-between pt-[14px] pr-[200px] pb-[10px] pl-[200px] bg-[#272343]">
               <div className="flex gap-[45%] mr-[20px] ">
                <div className="w-[255px] h-[16px] gap-[8px] opacity-[70%]  flex">
                <TiTick className="h-[20px] w-[20px] text-white"/>
                <p className="font-bold text-[13px] text-[#FFFFFF]">Free shipping on all orders over $50</p>
                    </div>
                    <div className="w-[250px] h-auto gap-[24px] opacity-45 flex ">
                        <div className="flex">
                            <p className="text-[#FFFFFF]">Eng</p>
                            <Image src={vector} alt="vector" className="text-[#FFFFFF] ml-1"/>

                        </div>
                        <p className="text-[#FFFFFF]">Faqs</p>
                        <div className="flex">
                        <Image src={alert} alt="alertciecle" className="text-[#FFFFFF] mt- "width={20} height={20}/>
                            <p className="text-[#FFFFFF] ml-2">Need Help</p>
                          

                        </div>
                    </div>
                    </div>
                    </div>

                    {/* second header */}
                    <div className="w-[1920px] h-[84px] justify-between pt-[10px] pr-[200px] pb-[10px] pl-[200px] bg-[#F0F2F3]">
                        <div className="flex gap-[57%]">
                        <div className="w-[166px] h-[40px] gap-[8px] flex">
                            <Image src={logo} alt="logo" />
                            <p className="font-semibold text-[26px] leading-[31px] mt-2">Comforty</p>
                        </div>
                        <div className="bg-white w-[120px] h-[44px] gap-[12px] mt-[10px] flex">
                        <AiOutlineShoppingCart className="mt-3 w-[22px] h-[22px] ml-2"/>
                        <p className="mt-3 font-bold">Cart</p>
                        <div className="w-[20px] h-[20px] mt-3 rounded-[50px] bg-[#007580] text-white"><p className="ml-1">2</p></div>
                        </div>

                 </div>   </div>
                 {/* 3rd header home shop */}
                 <div className="w-[1920px] h-[74px] bg-[#FFFFFF] justify-between pt-[14px] pr-[200px] pb-[14px] pl-[200px] ">
                    <div className="flex gap-[43%]">
                    <div className="w-[339px] h-[20px] gap-[3px] bg-purp mt-[10px]">
                    <ul className="flex gap-7 font-bold mb-2 text-[#636270]">
                        <Link href="/"className="text-[#007580]">Home</Link>
                        <Link href ="/">shop</Link>
                            <Link href ="/product">product</Link>
                            <Link href ="/">pages</Link>
                            <Link href ="/About">About</Link>
                     
                    </ul>
                    </div>
                    <div className="w-[175px] h-[20px] gap-[8px]  mt-[10px]">
                        <ul className="flex">
                            <li className="text-[#636270]">Contact:</li>
                            <li className="text-[#272343] ml-2">(808) 555-0111</li>
                        </ul>
                    </div>
                    </div>
                 </div>
                
            
        </div>
    )
    
}