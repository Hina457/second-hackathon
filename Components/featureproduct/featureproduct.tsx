import Image from "next/image";
import chair1 from "@/Components/public/chair1.svg";
import chair2 from "@/Components/public/chair2.svg";
import chair3 from "@/Components/public/chair3.svg";
import chair4 from "@/Components/public/chair4.svg";
import newicon from "@/Components/public/new.svg";
import sale from "@/Components/public/sale.svg";
import cart1 from "@/Components/public/cart1.svg";
import cartall from "@/Components/public/cartall.svg";
import cata1 from "@/Components/public/cata1.svg";
import cata2 from "@/Components/public/cata2.svg";
import cata3 from "@/Components/public/cata3.svg";








export default function Feature(){
  return(
      <div>
          <div className="w-[1920px] h-[461px] mt-[120px] ">
              <h1 className="text-[32px] leading-[35px] text-[#272343] ml-[150px]">Featured Products</h1>
              <div className="flex ml-[100px] ">
                  <div className="w-[312px] h-[377px] mt-[10px] ml-[50px]  ">
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
              {/* Top categories */}
              <div className="w-[2216px] h-[509px] mt-[20px] ml-[10px] ">
                  <p className="text-[32px] font-bold mt-[10px] ml-[150px]" >Top categories</p>
                  <div className="flex justify-center items-center gap-[10px] mr-[720px] ml-[130px] ">
                  <div className="w-[424px] h-[424px] mt-[40px] ml-200px] bg-gray-700">
                  <div className="w-[424px] h-[85px] bg-[#000000B2] absolute mt-[335px] opacity-100">
                      <h1  className="text-white font-bold ml-2 mt-4">Wing Chair</h1>
                      <p className="text-white ml-2">3,584 Products</p>
                  </div>
                      <Image src={cata1} alt="cata1"/>
                  
                  </div>
                  <div className="w-[424px] h-[424px] mt-[40px] ml-200px] bg-gray-700">
                  <div className="w-[424px] h-[85px] bg-[#000000B2] absolute mt-[335px] opacity-100">
                  <h1 className="text-white font-bold ml-2 mt-4">Wooden Chair</h1>
                  <p className="text-white ml-2">157 Products</p>
                  </div>
                  <Image src={cata2} alt="cata2"/>
                  </div>
                  <div className="w-[424px] h-[424px] mt-[40px] ml-200px] bg-gray-700">
                  <div className="w-[424px] h-[85px] bg-[#000000B2] absolute mt-[335px] opacity-100">
                  <h1  className="text-white font-bold ml-2 mt-4">Desk Chair</h1>
                  <p className="text-white ml-2">154 Products</p>
                  </div>
                  <Image src={cata3} alt="cata3"/>
            
                  </div>
                  </div>
                  </div>
                  </div>
                  )
                  }