
import Image from "next/image"
import chair1 from "@/Components/public/chair1.svg"
import chair2 from "@/Components/public/chair2.svg"
import chair3 from "@/Components/public/chair3.svg"
import chair4 from "@/Components/public/chair4.svg"
import newicon from   "@/Components/public/new.svg"
import sale from "@/Components/public/sale.svg"
import cart1 from "@/Components/public/cart1.svg"
import cartall from "@/Components/public/cartall.svg"
import chair5 from "@/Components/public/chair5.svg"
import chair6 from "@/Components/public/chair6.svg"
import chair7 from "@/Components/public/chair7.svg"

export default function Ourproduct(){
return(
    <div>
        <div className="w-[1320px] h-auto ml-[110px] pt-[40px]">
            <p className="w-[205] h-[34px] mt-[16px] ml-[557px] text-[32px] text-[#272343]">Our Products</p>
            <div className="flex gap-[20px] ml-[100px]">

            <div className="w-[312px] h-[377px] mt-[125px] ">
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
            {/* box2 */}
            <div className="w-[312px] h-[377px] mt-[125px] ">
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
            {/* box3 */}
            <div className="w-[312px] h-[377px] mt-[125px]">
            <Image src={chair3} alt="chair"/>
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

            
            {/* second section  */}
            <div className="flex gap-[20px] ml-[100px]">
            <div className="w-[312px] h-[377px] mt-[125px] ">
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
                </div>

        
    </div>
)
}
