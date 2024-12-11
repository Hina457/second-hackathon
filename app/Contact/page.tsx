

import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { HiOutlineTrophy } from "react-icons/hi2";
import { LuBadgeCheck } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";
export default function Contact(){
    return(
        <div>
            <div className="w-[1440px] ml-[130px] h-[1144px] mt-[30px] ">
            <div className="w-full h-[100px] ">
                    <h1 className="text-center font-semibold  text-[48px]">Get In Touch With Us</h1>
                    <p className="text-[#4F4F4F] text-[16px] font-normal text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
               

               {/* main box  */}
                
                <div className="w-[1058px] gap-8 ml-[200px] mt-[60px] flex h-[923px]  ">
                    <div className="w-[393px] h-[537px]  pt-20 ">
                        <IoLocation className="w-[30px] h-[30px] mt-3 ml-2"/>
                        <p className="font-bold text-[24px] mt-5 ml-7">Address</p>
                        <p className="w-[212px] h-[57px] ml-6 font-normal text-[16px]">236 5th SE Avenue, New York NY10000, United States </p>
                        {/* second box */}
                        <FaPhoneAlt className="w-[30px] h-[30px] mt-3 ml-2"/>
                        <p className="font-bold text-[24px] mt-5 ml-7">Address</p>
                        <p className="w-[212px] h-[57px] ml-6 font-normal text-[16px]">236 5th SE Avenue, New York NY10000, United States </p>
                        {/* 3 box */}
                        <FaClock className="w-[30px] h-[30px] mt-3 ml-2"/>
                        <p className="font-bold text-[24px] mt-5 ml-7">Address</p>
                        <p className="w-[212px] h-[57px] ml-6 font-normal text-[16px]">236 5th SE Avenue, New York NY10000, United States </p>
                    </div>






                    {/* right */}
                    <div className="w-[635px] h-[923px] pt-28">
                    <label typeof="Name" className="block text-sm font-normal text-[20px] mt-[30px] ml-[60px]  ">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 block px-4 py-2 border w-[500px] h-[75px] border-gray-500 ml-[60px] rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-400 sm:text-sm"
            />




            {/* email */}
            <label typeof="Email" className="block text-sm font-normal text-[20px] mt-[30px] ml-[60px]  text-gray-700">
            Email address
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Abc@def.com"
              className="mt-1 block px-4 py-2 border w-[500px] h-[75px] border-gray-500 ml-[60px] rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-400 sm:text-sm"
            />




<label typeof="text" className="block text-sm font-normal text-[20px] mt-[30px] ml-[60px]  text-gray-700">
Subject
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="This is an optional"
              className="mt-1 block px-4 py-2 border w-[500px] h-[75px] border-gray-500 ml-[60px] rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-400 sm:text-sm"
            />




<label typeof="Message" className="block text-sm font-bold text-[20px] mt-[30px] ml-[60px]  text-gray-700">
Message
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Hi! i d like to ask about"
              className="mt-1 block px-4 py-2 border w-[500px] h-[120px] border-gray-500 ml-[60px] rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-gray-400 sm:text-sm"
            />
              
              <button className="w-[237px] h-[55px] rounded-[5px] bg-[#029FAE] ml-[60px] mt-[40px] text-white border-[#B88E2F]">Submit</button>
                    </div>
                </div>
            </div>
            <div className="bg-[#F4F4F4] w-[1320px] h-[270px] pt-[100px] mb-[70px] pl-[60px] justify-between ml-[200px]">
              <div className="w-[1188px] h-[70px]  flex justify-between ">
             <div className="w-[337px] h-[70px] gap-[10px] flex">
                    <HiOutlineTrophy className="w-[60px] h-[60px]"/>
                  <div className="w-[267px] h-[70px]">
              <p className="font-semibold text-[25px]">High Quality</p>
              <p className="text-[#898989] font-medium text-[20px]">crafted from top materials</p>
              </div>
             </div>
             {/* box 2 */}
             <div className="w-[337px] h-[70px]  gap-[10px] flex">
             <LuBadgeCheck className="w-[60px] h-[60px]"/>
                  <div className="w-[267px] h-[70px]">
              <p className="font-semibold text-[25px]">High Quality</p>
              <p className="text-[#898989] font-medium text-[20px]">crafted from top materials</p>
              </div>
             </div>
             {/* box 3 */}
             <div className="w-[337px] h-[70px] flex gap-[10px]">
             <MdSupportAgent  className="w-[60px] h-[60px]"/>
                  <div className="w-[267px] h-[70px]">
              <p className="font-semibold text-[25px]">High Quality</p>
              <p className="text-[#898989] font-medium text-[20px]">crafted from top materials</p>
              </div>
             </div>
             </div>
              </div>
        </div>
    )
}