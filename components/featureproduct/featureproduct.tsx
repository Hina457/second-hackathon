import Image from "next/image";
import chair1 from "@/components/public/chair1.svg";
import chair2 from "@/components/public/chair2.svg";
import chair3 from "@/components/public/chair3.svg";
import chair4 from "@/components/public/chair4.svg";
import newicon from "@/components/public/new.svg";
import sale from "@/components/public/sale.svg";
import cart1 from "@/components/public/cart1.svg";
import cartall from "@/components/public/cartall.svg";
import cata1 from "@/components/public/cata1.svg";
import cata2 from "@/components/public/cata2.svg";
import cata3 from "@/components/public/cata3.svg";
import chair6 from "@/components/public/chair6.svg";









export default function Feature() {
  return (
    <div>
     
<div className="max-w-screen-xl mx-auto px-4 mt-12">
  {/* Section Header */}
  <h1 className="text-2xl md:text-3xl font-bold text-[#272343] text-center mb-8">
    Featured Products
  </h1>

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* Product 1 */}
    <div className="relative bg-white shadow-lg rounded-md overflow-hidden">
      <Image src={newicon} alt="icon" className="absolute top-2 left-2 w-10 h-10" />
      <Image src={chair1} alt="chair" className="w-full h-auto" />
      <div className="p-4">
        <p className="font-bold text-sm md:text-base text-[#007580]">Library Stool Chair</p>
        <p className="text-lg text-[#272343]">$20</p>
      </div>
      <div className="flex items-center justify-between p-4">
        <Image src={cart1} alt="cart" className="w-6 h-6" />
      </div>
    </div>

    {/* Product 2 */}
    <div className="relative bg-white shadow-lg rounded-md overflow-hidden">
      <Image src={sale} alt="sale" className="absolute top-2 left-2 w-10 h-10" />
      <Image src={chair2} alt="chair" className="w-full h-auto" />
      <div className="p-4">
        <p className="font-bold text-sm md:text-base">Library Stool Chair</p>
        <div className="flex items-center">
          <p className="text-lg text-[#272343]">$20</p>
          <p className="line-through text-[#9A9CAA] ml-3">$39</p>
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <Image src={cartall} alt="cart" className="w-6 h-6" />
      </div>
    </div>

    {/* Product 3 */}
    <div className="relative bg-white shadow-lg rounded-md overflow-hidden">
      <Image src={chair3} alt="chair" className="w-full h-auto" />
      <div className="p-4">
        <p className="font-bold text-sm md:text-base">Library Stool Chair</p>
        <p className="text-lg text-[#272343]">$20</p>
      </div>
      <div className="flex items-center justify-between p-4">
        <Image src={cartall} alt="cart" className="w-6 h-6" />
      </div>
    </div>

    {/* Product 4 */}
    <div className="relative bg-white shadow-lg rounded-md overflow-hidden">
      <Image src={chair4} alt="chair" className="w-full h-auto" />
      <div className="p-4">
        <p className="font-bold text-sm md:text-base">Library Stool Chair</p>
        <p className="text-lg text-[#272343]">$20</p>
      </div>
      <div className="flex items-center justify-between p-4">
        <Image src={cartall} alt="cart" className="w-6 h-6" />
      </div>
    </div>
  </div>
</div>










      {/* Top categories */}
      

<div className="max-w-screen-xl mx-auto px-4 mt-6">
  {/* Section Header */}
  <p className="text-2xl md:text-3xl font-bold text-center mb-6">Top Categories</p>

  {/* Categories Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Category 1 */}
    <div className="relative group hover:scale-105">
      <Image src={cata1} alt="cata1" className="w-full h-auto rounded-md" />
      <div className="absolute bottom-0 left-0 w-full h-[85px] bg-black bg-opacity-75 flex flex-col justify-center px-4">
        <h1 className="text-white font-bold text-lg">Wing Chair</h1>
        <p className="text-white text-sm">3,584 Products</p>
      </div>
    </div>

    {/* Category 2 */}
    <div className="relative group hover:scale-105">
      <Image src={cata2} alt="cata2" className="w-full h-auto rounded-md" />
      <div className="absolute bottom-0 left-0 w-full h-[85px] bg-black bg-opacity-75 flex flex-col justify-center px-4">
        <h1 className="text-white font-bold text-lg">Wooden Chair</h1>
        <p className="text-white text-sm">157 Products</p>
      </div>
    </div>

    {/* Category 3 */}
    <div className="relative group hover:scale-105">
      <Image src={cata3} alt="cata3" className="w-full h-auto rounded-md" />
      <div className="absolute bottom-0 left-0 w-full h-[85px] bg-black bg-opacity-75 flex flex-col justify-center px-4">
        <h1 className="text-white font-bold text-lg">Desk Chair</h1>
        <p className="text-white text-sm">154 Products</p>
      </div>
    </div>
  </div>
</div>















      {/*Explore */}
      <div className="px-4 sm:px-6 py-8 sm:py-16 flex flex-col lg:flex-row items-center lg:ml-16">
  {/* Vertical Text Section */}
  <div className="flex items-center gap-6 lg:gap-10 mb-8 lg:mb-0">
    <div className="w-12 flex items-center justify-center">
      <p className="transform -rotate-90 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 whitespace-nowrap">
        Explore New and Popular Styles
      </p>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full flex flex-col lg:flex-row lg:gap-6">
    {/* Left Section - Large Image */}
    <div className="w-full lg:w-[648px] h-auto flex justify-center items-center mb-6 lg:mb-0">
      <Image src={chair3} alt="chair" className="w-full h-auto lg:w-[648px] lg:h-[648px]" />
    </div>

    {/* Right Section - Small Images */}
    <div className="w-full grid grid-cols-2 gap-3 sm:gap-6">
      <div className="w-full h-auto">
        <Image src={chair4} alt="Chair 4" className="w-fulln h-auto sm:h-[312px]" />
      </div>
      <div className="w-full h-auto">
        <Image src={chair1} alt="Chair 1" className="w-full h-auto sm:h-[312px]" />
      </div>
      <div className="w-full h-auto">
        <Image src={chair6} alt="Chair 6" className="w-full h-auto sm:h-[312px]" />
      </div>
      <div className="w-full h-auto">
        <Image src={chair1} alt="Chair 1" className="w-full h-auto sm:h-[312px]" />
      </div>
    </div>
  </div>
</div>

    </div>

  )
}