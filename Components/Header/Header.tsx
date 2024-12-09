
import React from "react";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import alert from "@/Components/public/alertcircle.svg";
import vector from "@/Components/public/Vector.svg";
import logo from "@/Components/public/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      {/* First Header */}
      <div className="bg-[#272343] text-white">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto py-2 px-4 lg:px-16">
          <div className="flex items-center gap-2 opacity-70">
            <TiTick className="text-xl" />
            <p className="text-sm font-bold">Free shipping on all orders over $50</p>
          </div>
          <div className="flex items-center gap-6 opacity-45 text-sm">
            <div className="flex items-center gap-1">
              <p>Eng</p>
              <Image src={vector} alt="vector" />
            </div>
            <p>Faqs</p>
            <div className="flex items-center gap-1">
              <Image src={alert} alt="alertcircle" width={20} height={20} />
              <p>Need Help</p>
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
            <p className="font-bold ml-2">Cart</p>
            <div className="ml-2 w-6 h-6 flex items-center justify-center rounded-full bg-[#007580] text-white">
              2
            </div>
          </div>
        </div>
      </div>

      {/* Third Header */}
      <div className="bg-white">
        <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto py-4 px-4 lg:px-16">
          <ul className="flex gap-4 font-bold text-sm text-[#636270]">
            <li>
              <Link href="/" className="text-[#007580]">Home</Link>
            </li>
            <li><Link href="/">Shop</Link></li>
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/">Pages</Link></li>
            <li><Link href="/About">About</Link></li>
          </ul>
          <ul className="flex gap-2 text-sm text-[#636270]">
            <li>Contact:</li>
            <li className="text-[#272343]">(808) 555-0111</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
