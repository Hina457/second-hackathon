

import Image from "next/image"
import chair1 from "@/Components/public/chair1.svg"
import chair2 from "@/Components/public/chair2.svg"
import chair3 from "@/Components/public/chair3.svg"
import chair4 from "@/Components/public/chair4.svg"
import newicon from   "@/Components/public/new.svg"
import sale from "@/Components/public/sale.svg"
import cart1 from "@/Components/public/cart1.svg"
import cartall from "@/Components/public/cartall.svg"

import cata2 from "@/Components/public/cata2.svg"

import chair5 from "@/Components/public/chair5.svg"
import chair6 from "@/Components/public/chair6.svg"
import chair7 from "@/Components/public/chair7.svg"
import newchair from "@/Components/public/newchair.svg"

export default function product(){
    return(
        <div>
            <div className="w-[1920px] h-[461px] mt-[120px] pb-7">
                <h1 className="text-[32px] leading-[35px] text-[#272343] ml-[150px]">All Products</h1>
                <div className="flex">
                    <div className="w-[312px] h-[377px] mt-[10px] ml-[150px] ">
                    <Image src={newicon} alt="icon" className="absolute ml-[10px] mt-[10px]"/>
                        <Image src={chair1} alt="chair"/>
                        <div className="flex">
                        <div className="w-[256px] h-[51px] mt-[10px] gap-[10px] ">
                            <p className="font-bold text-[16px] leading-[20px] text-[#007580]">Library Stool Chair</p>
                            <p className="text-[18px] text-[#272343]">$20</p>
                        </div>
                        <Image src={cart1} alt="cart" className="ml-2"/>
                        </div>
                       
                        
                       
                    </div>
                    <div className="w-[312px] h-[377px] mt-[10px] ml-[50px] ">
                        <Image src={sale} alt="sale" className="absolute ml-[10px] mt-[10px]"/>
                        <Image src={chair2} alt="chair"/>
                        <div className="flex">
                        <div className="w-[256px] h-[51px] mt-[10px] gap-[10px]">
                            <p className="font-bold text-[16px] leading-[20px] ">Library Stool Chair</p>
                            <div className="flex">
                            <p className="text-[18px] text-[#272343]">$20</p>
                            <p className="line-through text-[#9A9CAA] ml-3 "> $39</p>
                            </div>
                        </div>
                        <Image src={cartall} alt="cart" className="ml-2"/>
                        </div>
                       
                    </div>
                    <div className="w-[312px] h-[377px] mt-[10px] ml-[50px]">
                    <Image src={chair3} alt="chair"/>
                    <div className="flex">
                        <div className="w-[256px] h-[51px] mt-[10px] gap-[10px] ">
                            <p className="font-bold text-[16px] leading-[20px] ">Library Stool Chair</p>
                            <p className="text-[18px] text-[#272343]">$20</p>
                        </div>
                        <Image src={cartall} alt="cart" className="ml-2"/>
                        </div>
                       
                    </div>
                    <div className="w-[312px] h-[377px] mt-[10px] ml-[50px] ">
                    <Image src={chair4} alt="chair"/>
                    <div className="flex">
                        <div className="w-[256px] h-[51px] mt-[10px] gap-[10px] ">
                            <p className="font-bold text-[16px] leading-[20px]">Library Stool Chair</p>
                            <p className="text-[18px] text-[#272343]">$20</p>
                        </div>
                        <Image src={cartall} alt="cart" className="ml-2"/>
                        </div>
                       
                    </div>
                </div>
                </div>
                {/* second */}
                <div className="flex gap-[20px]">
            <div className="w-[312px] h-[377px] mt-[125px] ml-[150px] ">
            <Image src={newicon} alt="icon" className="absolute ml-[10px] mt-[10px]"/>
                        <Image src={cata2} alt="chair"/>
                        <div className="flex">
                        <div className="w-[256px] h-[51px] mt-[10px] gap-[10px] ">
                            <p className="font-bold text-[16px] leading-[20px] text-[#007580]">Library Stool Chair</p>
                            <p className="text-[18px] text-[#272343]">$20</p>
                        </div>
                        <Image src={cart1} alt="cart" className="ml-2"/>
                        </div>
            </div>
            {/* box2 */}
            <div className="w-[312px] h-[377px] mt-[125px] ">
            <Image src={sale} alt="sale" className="absolute ml-[10px] mt-[10px]"/>
                        <Image src={chair6} alt="chair"/>
                        <div className="flex">
                        <div className="w-[256px] h-[51px] mt-[10px] gap-[10px]">
                            <p className="font-bold text-[16px] leading-[20px] ">Library Stool Chair</p>
                            <div className="flex">
                            <p className="text-[18px] text-[#272343]">$20</p>
                            <p className="line-through text-[#9A9CAA] ml-3 "> $39</p>
                            </div>
                        </div>
                        <Image src={cartall} alt="cart" className="ml-2"/>
                        </div>

            </div>
            {/* box3 */}
            <div className="w-[312px] h-[377px] mt-[125px] ">
            <Image src={chair7} alt="chair"/>
                    <div className="flex">
                        <div className="w-[256px] h-[51px] mt-[10px] gap-[10px] ">
                            <p className="font-bold text-[16px] leading-[20px] ">Library Stool Chair</p>
                            <p className="text-[18px] text-[#272343]">$20</p>
                        </div>
                        <Image src={cartall} alt="cart" className="ml-2"/>
                        </div>
                       
            </div>
            {/* box 4 */}
            <div className="w-[312px] h-[377px] mt-[125px] ">
            <Image src={chair1} alt="chair"/>
                    <div className="flex">
                        <div className="w-[256px] h-[51px] mt-[10px] gap-[10px] ">
                            <p className="font-bold text-[16px] leading-[20px]">Library Stool Chair</p>
                            <p className="text-[18px] text-[#272343]">$20</p>
                        </div>
                        <Image src={cartall} alt="cart" className="ml-2"/>
                        </div>
                       
                    </div>
                    </div>
                {/* 3rd */}
                <div className="flex gap-[20px]">
            <div className="w-[312px] h-[377px] mt-[125px] ml-[150px]">
            <Image src={newicon} alt="icon" className="absolute ml-[10px] mt-[10px]"/>
                        <Image src={chair5} alt="chair"/>
                        <div className="flex">
                        <div className="w-[256px] h-[51px] mt-[10px] gap-[10px] ">
                            <p className="font-bold text-[16px] leading-[20px] text-[#007580]">Library Stool Chair</p>
                            <p className="text-[18px] text-[#272343]">$20</p>
                        </div>
                        <Image src={cart1} alt="cart" className="ml-2"/>
                        </div>
            </div>
            {/* box2 */}
            <div className="w-[312px] h-[377px] mt-[125px] ">
            <Image src={sale} alt="sale" className="absolute ml-[10px] mt-[10px]"/>
                        <Image src={chair6} alt="chair"/>
                        <div className="flex">
                        <div className="w-[256px] h-[51px] mt-[10px] gap-[10px]">
                            <p className="font-bold text-[16px] leading-[20px] ">Library Stool Chair</p>
                            <div className="flex">
                            <p className="text-[18px] text-[#272343]">$20</p>
                            <p className="line-through text-[#9A9CAA] ml-3 "> $39</p>
                            </div>
                        </div>
                        <Image src={cartall} alt="cart" className="ml-2"/>
                        </div>

            </div>
            {/* box3 */}
            <div className="w-[312px] h-[377px] mt-[125px] ">
            <Image src={chair7} alt="chair"/>
                    <div className="flex">
                        <div className="w-[256px] h-[51px] mt-[10px] gap-[10px] ">
                            <p className="font-bold text-[16px] leading-[20px] ">Library Stool Chair</p>
                            <p className="text-[18px] text-[#272343]">$20</p>
                        </div>
                        <Image src={cartall} alt="cart" className="ml-2"/>
                        </div>
                       
            </div>
            {/* box 4 */}
            <div className="w-[312px] h-[377px] mt-[125px] ">
            <Image src={chair1} alt="chair"/>
                    <div className="flex">
                        <div className="w-[256px] h-[51px] mt-[10px] gap-[10px] ">
                            <p className="font-bold text-[16px] leading-[20px]">Library Stool Chair</p>
                            <p className="text-[18px] text-[#272343]">$20</p>
                        </div>
                        <Image src={cartall} alt="cart" className="ml-2"/>
                        </div>
                       
                    </div>
                    </div>
                    <div className="w-[1924px] h-[754px] pt-[100px] pr-[100px] pb-[100px] pl-[200px] gap-[70px] bg-[#E1E3E5]">
                        <div className="w-[760px] h-[165px] ml-[200px] ">
                            <p className="text-[50px] text-center font-normal">Or subscribe to the newsletter</p>
                            <input type="text" placeholder="your email" className="h-[43px] border ml-16 border-b w-[550px]  "/>
                            <button className="w-[100px] h-[46px] rounded-[8px]  ml-2 underline text-black">Subscribe</button>

                        </div>
                        <div className="w-[1324px] h-[319px]  ">
                            <h1 className="font-normal text-[50px] text-center">Follow products and discounts on Instagram</h1>
                            <div className="w-[1324px] h-[200px] gap-[24px]  flex ml-4">
                             <div className="w-[186px] h-[186px]">
                             <Image src={cata2} alt=""/>
                             </div>

                             <div className="w-[186px] h-[186px]">
                             <Image src={chair5} alt=""/>
                             </div>
                                
                            

                            <div className="w-[186px] h-[186px]">
                             <Image src={chair2} alt=""/>
                             </div>


                             <div className="w-[186px] h-[186px]">
                             <Image src={chair1} alt=""/>
                             </div>

                             <div className="w-[186px] h-[186px]">
                             <Image src={chair3} alt=""/>
                             </div>

                             <div className="w-[186px] h-[186px]">
                             <Image src={newchair} alt=""/>
                             </div>
                             </div>
                        </div>
                    </div>
                
        </div>
    )
}