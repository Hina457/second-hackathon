
import Image from "next/image"
import chair from "@/Components/public/chair.svg"
import logo1 from "@/Components/public/logo1.svg"
import logo2 from "@/Components/public/logo2.svg"
import logo3 from "@/Components/public/logo-3.svg"
import logo4 from "@/Components/public/logo4.svg"
import logo5 from "@/Components/public/logo5.svg"
import logo6 from "@/Components/public/logo6.svg"
import logo7 from "@/Components/public/logo7.svg"

export default function Hero(){
    return(
        <div>
           <div className="flex justify-center items-center">
            <div className="w-[1321px] h-[850px] bg-[#F0F2F3] flex justify-between items-center px-[70px]">
                <div className="flex flex-col justify-center items-start w-1/2 space-y-4">
                <h1 className="text-[14px] pt-[100px] font-normal text-[#272343] text-center ">Welcome to chairy</h1>
                <p className="w-[557px] text-[60px] font-bold text-center md:text-left mb-6">
            Best Furniture Collection for your interior.
          </p>
        
          <button className="bg-[#029FAE] w-[171px] text-white py-3 px-6 rounded-[8px] flex items-center gap-[20px] hover:bg-blue-700">
            <span>Shop Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12h18M15 18l6-6-6-6"
              />
            </svg>
          </button>

         
                </div>
               

            
          <Image src={chair} alt="chair"/>
        
        


            </div>
           </div>
           {/* logos */}
           <div className="w-[1321px]  h-[139px] mt-[1107] ml-[178px] justify-between ">
            <div className="flex justify-center items-center gap-[40px] mr-[30px] pt-[50px]">
            <div className="w-[85px] h-[87px]  ml-[40px] pt-[20px]">
                <Image src={logo1} alt="logo1"/>
            </div>
            <div className="w-[85px] h-[87px]  ml-[40px] pt-[20px]">
            <Image src={logo2} alt="logo1"/>
            </div>
            <div className="w-[85px] h-[87px]  ml-[40px] pt-[20px]">
            <Image src={logo3} alt="logo1"/>
            </div>
            <div className="w-[85px] h-[87px]  ml-[40px] pt-[20px] mt-[10px]">
            <Image src={logo4} alt="logo1"/>
            </div>
            <div className="w-[85px] h-[87px]  ml-[40px] pt-[20px]">
            <Image src={logo5} alt="logo1"/>
            </div>
            <div className="w-[85px] h-[87px]  ml-[40px] pt-[20px]">
            <Image src={logo6} alt="logo1"/>
            </div>
            <div className="w-[85px] h-[87px]  ml-[40px] pt-[20px]">
            <Image src={logo7} alt="logo1"/>
            </div>
            </div>
           </div>
        </div>
    )
}