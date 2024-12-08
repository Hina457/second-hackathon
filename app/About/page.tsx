
import chair1 from "@/Components/public/chair1.svg"
import Image from "next/image"
export default function About(){
    return(
        <div>
            <div className="flex">
            <div className="w-[619px] h-[478px] mt-[100px] ml-[150px] bg-[#007580]">
                <h1 className="w-[325px] h-[39px] font-semibold text-[32px] text-white mt-[60px] ml-[60px]">About Us - Comforty</h1>
                <p className="font-normal text-[18px] w-[495px] h-[110px] text-white ml-[60px]">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
                <button className="w-[179px] h-[56px] ml-[64px] bg-[#098591] text-white mt-[130px]">View collection</button>
            </div>
            <div className="w-[619px]  mt-[100px] ml-[50px] bg-[#007580]">
                <Image src={chair1} alt="chair" width={480}/>
            </div>
            </div>
            <h1 className="w-[501px] h-[35px] ml-[500px] font-bold mt-[40px] text-[32px] text-center">What makes our Brand Different</h1>
            <div className="w-[1320px] h-[244px] ml-[200px] bg-red-500"></div>
        </div>
    )
}