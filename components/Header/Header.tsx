





import React from "react";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import alert from "@/components/public/alertcircle.svg";
import vector from "@/components/public/Vector.svg";
import logo from "@/components/public/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      {/* First Header */}
      <div className="bg-[#272343] text-white">
  <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto py-2 px-4 lg:px-16">
    {/* Free Shipping */}
    <div className="flex items-center gap-2 opacity-70 w-full sm:w-auto">
      <TiTick className="text-xl" />
      <p className="text-sm font-bold">Free shipping on all orders over $50</p>
    </div>

    {/* Language, FAQs, and Help (visible on large screens) */}
    <div className="hidden lg:flex items-center gap-6 opacity-45 text-sm w-full sm:w-auto mt-2 lg:mt-0">
      <div className="flex items-center gap-1">
        <p>Eng</p>
        <Image src={vector} alt="vector" />
      </div>
      <p>  <Link href="/Faqs">Faqs</Link></p>
      <div className="flex items-center gap-1">
        <Image src={alert} alt="alertcircle" width={20} height={20} />
        <p>Need Help</p>
      </div>
    </div>

    {/* Mobile View (language, FAQ, Help - visible on small screens) */}
    <div className="lg:hidden w-full mt-2 text-center text-sm opacity-70">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <p>Eng</p>
          <Image src={vector} alt="vector" width={15} height={10} />
        </div>
        <p> <Link href="/Faqs">Faqs</Link></p>
        <div className="flex items-center gap-1">
          <Image src={alert} alt="alertcircle" width={20} height={20} />
          <p>Need Help</p>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Second Header */}
      <div className="bg-[#F0F2F3]">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4 px-4 lg:px-16">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" />
            <p className="text-xl font-semibold">Comforty</p>
          </div>
          <div className="flex items-center bg-white rounded-md px-3 py-2">
            <AiOutlineShoppingCart className="text-xl" />
            <p className="font-bold ml-2"> <Link href="/Cart">Cart</Link></p>
            <div className="ml-2 w-6 h-6 flex items-center justify-center rounded-full bg-[#007580] text-white">
              2
            </div>
          </div>
        </div>
      </div>

      {/* Third Header */}
      <div className="bg-white border-b">
  <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto py-4 px-4 lg:px-16">
    {/* Navigation Links */}
    <ul className="flex gap-4 font-bold text-sm text-[#636270] flex-wrap">
      <li>
        <Link href="./" className="text-[#007580]">Home</Link>
      </li>
      <li className="hover:text-[#007580]">Shop</li>
      <li className="hover:text-[#007580]"><Link href="/product">Product</Link></li>
      <li className="hover:text-[#007580]">Pages</li>
      <li className="hover:text-[#007580]"><Link href="/About">About</Link></li>
     
    </ul>

    {/* Contact Information */}
    <ul className="hidden lg:flex gap-2 text-sm text-[#636270]">
      <li className="font-bold hover:text-[#007580]"> <Link href="/Contact">Contact:</Link></li>
      <li className="text-[#272343]">(808) 555-0111</li>
    </ul>

    {/* Mobile Responsive Contact */}
    <div className="lg:hidden flex flex-col items-end gap-2 mt-4">
      <p className="text-sm text-[#636270]"> <Link href="/Contact">Contact:<span className="text-[#272343]">(808) 555-0111</span></Link></p>
    </div>
  </div>
</div>
</div>
)
}





