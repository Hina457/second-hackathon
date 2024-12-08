
import Image from "next/image";
import chair from "@/Components/public/chair3.svg"
import chair1 from "@/Components/public/chair1.svg"
import chair6 from "@/Components/public/chair6.svg"
import chair4 from "@/Components/public/chair4.svg"


export default function (){
    return(
        <div>
             
    <div className="p-4 flex items-center pb-[80px] pt-[80px] ml-[50px]">
      {/* Vertical Text Section */}
      <div className="w-12 flex items-center justify-center">
        <p className="transform -rotate-90 text-3xl font-semibold text-gray-700 whitespace-nowrap ml-[200px]">
          Explore New and Popular Styles
        </p>
      </div>

        

        <div className="w-[1320px] h-auto  mt-[20px] ml-[100px] flex gap-4">
            {/* left */}
            <div className="w-[648px] h-[648px] bg-gray-600 ">
                <Image src={chair} alt="chair" width={648} height={648}/>
            </div>
            {/* right */}
            <div className="w-[600px] h-auto grid grid-cols-2 gap-10">
                <div className="w-[312px] h-[312px]  ">
                    <Image src={chair4} alt=""/>
                </div>
                <div className="w-[312px] h-[312px] ">
                <Image src={chair1} alt="" />
                </div>
                <div className="w-[312px] h-[312px] ">
                <Image src={chair6} alt=""/>
                </div>
                <div className="w-[312px] h-[312px] ">
                <Image src={chair1} alt=""/>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}