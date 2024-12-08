
import logo from "@/Components/public/logo.svg"
import { FaFacebook ,FaTwitter, FaInstagram,FaPinterest,FaYoutube} from "react-icons/fa";
import Image from "next/image"
import visa from "@/Components/public/visa.svg"

export default function Footer(){
    return(
        <div>
            <div className="w-[1920px] h-[300px] bg-[#FFFFFF] border border-gray-300">
                   <div className="flex">
                <div className="w-[350px] h-[198px] mt-[50px] ml-[200px] gap-[24px] ">
                <div className="w-[166px] h-[40px] gap-[8px] flex">
                            <Image src={logo} alt="logo" />
                            <p className="font-semibold text-[26px] leading-[31px] mt-2">Comforty</p>
                        </div>
                        <p className="W-[350px] h-[72px] opacity-[60%] font-normal text-[20px] mt-5 leading-[24px]">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                        Cras egestas purus </p>
                        
                        <div className="flex gap-6 mt-3">
                            <div className="w-[38px] h-[38px] border border-[#007580] rounded-[50px]">
                                <FaFacebook className="text-[#007580] m-2"/>
                            </div>
                           
                            <FaTwitter className="w-[28px] h-[28px]"/>
                            <FaInstagram className="w-[28px] h-[28px]"/>
                            <FaPinterest className="w-[28px] h-[28px]"/>
                            <FaYoutube className="w-[28px] h-[28px]"/>
                            </div>
                        </div>
                




                     



                    <div className="w-[105px] h-[203px] mt-[50px] ml-[27px] gap-[20px] ">
                        <p className="font-normal text-[14px] w-[82px]  h-[15px] text-[#9A9CAA]">Category</p>
                        <div className="gap-[25px]">
                        <p>Sofa</p>
                        <p>Armchair</p>
                        <p>Wing Chair</p>
                        <p>Park Bench</p>
                        </div>
                    </div>
                <div className="w-[156px] h-[143px] mt-[50px] gap-[20px] ml-[25px] ">
                <p className="font-normal text-[14px] w-[82px] ml-8 h-[15px] text-[#9A9CAA]">Support</p>
                        <div className="gap-4 ml-8">
                        <p>Help & Support</p>
                        <p>Tearms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Help</p>
                        </div>
                </div>
                <div className="w-[424px] h-[142px] mt-[50px] ml-[20px] b">

                    <p className="ml-2">Newsletter</p>
                    <input type="text" placeholder="your email" className="h-[43px] border ml-2"/>
                    <button className="w-[127px] h-[46px] rounded-[8px] bg-[#029FAE] ml-2 text-white">Subscribe</button>
                    <p className="text-[#272343] opacity-[60%] ml-2 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                    </div>
                
                    </div>


            </div>
            <div className="w-[1920px] h-[75px] justify-between pt-[24px] pr-[300px] pb-[24px] pl-[300px] bg-[#FFFFFF] flex">
                <div className="w-[341px] h-[21px] font-normal text-[14px] text-[#9A9CAA]">
                @ 2021 - Blogy - Designed & Develop by <span>Zakirsoft</span>

                </div>
                <Image src={visa} alt="visacard" className="text-[#9A9CAA] mr-[90px]"/>
            </div>
        </div>
    )
}