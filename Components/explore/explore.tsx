


import Image from "next/image";
import chair from "@/Components/public/chair3.svg";
import chair1 from "@/Components/public/chair1.svg";
import chair6 from "@/Components/public/chair6.svg";
import chair4 from "@/Components/public/chair4.svg";

export default function Explore () {
  return (
    <div className="px-6 py-16">
      {/* Vertical Text Section */}
      <div className="flex items-center gap-10">
        <div className="w-12 flex items-center justify-center">
          <p className="transform -rotate-90 text-2xl sm:text-3xl font-semibold text-gray-700 whitespace-nowrap">
            Explore New and Popular Styles
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full flex flex-wrap gap-6">
          {/* Left Section - Large Image */}
          <div className="w-full lg:w-[648px] h-[648px] bg-gray-600 flex justify-center items-center">
            <Image src={chair} alt="chair" width={648} height={648} />
          </div>

          {/* Right Section - Small Images */}
          <div className="w-full lg:w-[600px] grid grid-cols-2 gap-6">
            <div className="w-full h-[312px]">
              <Image src={chair4} alt="Chair 4" width={312} height={312} />
            </div>
            <div className="w-full h-[312px]">
              <Image src={chair1} alt="Chair 1" width={312} height={312} />
            </div>
            <div className="w-full h-[312px]">
              <Image src={chair6} alt="Chair 6" width={312} height={312} />
            </div>
            <div className="w-full h-[312px]">
              <Image src={chair1} alt="Chair 1" width={312} height={312} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
