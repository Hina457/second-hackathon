

import Image from "next/image";
import chair1 from "@/components/public/chair1.svg";
import chair2 from "@/components/public/chair2.svg";
import chair3 from "@/components/public/chair3.svg";
import chair4 from "@/components/public/chair4.svg";
import newicon from "@/components/public/new.svg";
import sale from "@/components/public/sale.svg";
import cart1 from "@/components/public/cart1.svg";
import cartall from "@/components/public/cartall.svg";
import cata2 from "@/components/public/cata2.svg";
import chair5 from "@/components/public/chair5.svg";
import chair6 from "@/components/public/chair6.svg";
import chair7 from "@/components/public/chair7.svg";
import newchair from "@/components/public/newchair.svg";

export default function Product() {
  return (
    <div className="container mx-auto px-6 mt-20">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-[#272343] mb-8">All Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="relative w-full h-[377px]">
          <Image src={newicon} alt="New icon" className="absolute top-2 left-2" />
          <Image src={chair1} alt="chair" className="w-full h-[312px] object-cover" />
          <div className="flex justify-between mt-2">
            <div>
              <p className="font-bold text-lg text-[#007580]">Library Stool Chair</p>
              <p className="text-xl text-[#272343]">$20</p>
            </div>
            <Image src={cart1} alt="Cart" className="ml-2 w-8 h-8 cursor-pointer" />
          </div>
        </div>

        {/* Product 2 */}
        <div className="relative w-full h-[377px]">
          <Image src={sale} alt="Sale icon" className="absolute top-2 left-2" />
          <Image src={chair2} alt="chair" className="w-full h-[312px] object-cover" />
          <div className="flex justify-between mt-2">
            <div>
              <p className="font-bold text-lg">Library Stool Chair</p>
              <div className="flex items-center">
                <p className="text-xl text-[#272343]">$20</p>
                <p className="line-through text-[#9A9CAA] ml-3">$39</p>
              </div>
            </div>
            <Image src={cartall} alt="Cart" className="ml-2 w-8 h-8 cursor-pointer" />
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-full h-[377px]">
          <Image src={chair3} alt="chair" className="w-full h-[312px] object-cover" />
          <div className="flex justify-between mt-2">
            <div>
              <p className="font-bold text-lg">Library Stool Chair</p>
              <p className="text-xl text-[#272343]">$20</p>
            </div>
            <Image src={cartall} alt="Cart" className="ml-2 w-8 h-8 cursor-pointer" />
          </div>
        </div>

        {/* Product 4 */}
        <div className="w-full h-[377px]">
          <Image src={chair4} alt="chair" className="w-full h-[312px] object-cover" />
          <div className="flex justify-between mt-2">
            <div>
              <p className="font-bold text-lg">Library Stool Chair</p>
              <p className="text-xl text-[#272343]">$20</p>
            </div>
            <Image src={cartall} alt="Cart" className="ml-2 w-8 h-8 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Additional Product Rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {/* Product 5 */}
        <div className="relative w-full h-[377px]">
          <Image src={newicon} alt="New icon" className="absolute top-2 left-2" />
          <Image src={cata2} alt="Chair" className="w-full h-[312px] object-cover" />
          <div className="flex justify-between mt-2">
            <div>
              <p className="font-bold text-lg text-[#007580]">Library Stool Chair</p>
              <p className="text-xl text-[#272343]">$20</p>
            </div>
            <Image src={cart1} alt="Cart" className="ml-2 w-8 h-8 cursor-pointer" />
          </div>
        </div>

        {/* Product 6 */}
        <div className="relative w-full h-[377px]">
          <Image src={sale} alt="Sale icon" className="absolute top-2 left-2" />
          <Image src={chair6} alt="Chair" className="w-full h-[312px] object-cover" />
          <div className="flex justify-between mt-2">
            <div>
              <p className="font-bold text-lg">Library Stool Chair</p>
              <div className="flex items-center">
                <p className="text-xl text-[#272343]">$20</p>
                <p className="line-through text-[#9A9CAA] ml-3">$39</p>
              </div>
            </div>
            <Image src={cartall} alt="Cart" className="ml-2 w-8 h-8 cursor-pointer" />
          </div>
        </div>

        {/* Product 7 */}
        <div className="w-full h-[377px]">
          <Image src={chair7} alt="Chair" className="w-full h-[312px] object-cover" />
          <div className="flex justify-between mt-2">
            <div>
              <p className="font-bold text-lg">Library Stool Chair</p>
              <p className="text-xl text-[#272343]">$20</p>
            </div>
            <Image src={cartall} alt="Cart" className="ml-2 w-8 h-8 cursor-pointer" />
          </div>
        </div>

        {/* Product 8 */}
        <div className="w-full h-[377px]">
          <Image src={chair1} alt="Chair" className="w-full h-[312px] object-cover" />
          <div className="flex justify-between mt-2">
            <div>
              <p className="font-bold text-lg">Library Stool Chair</p>
              <p className="text-xl text-[#272343]">$20</p>
            </div>
            <Image src={cartall} alt="Cart" className="ml-2 w-8 h-8 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="bg-[#E1E3E5] py-16 mt-16 text-center">
        <p className="text-4xl font-normal mb-4">Or subscribe to the newsletter</p>
        <div className="flex justify-center items-center gap-4">
          <input type="email" placeholder="Your email" className="h-[43px] border-b w-[550px] px-4" />
          <button className="w-[100px] h-[46px] rounded-[8px] bg-black text-white">Subscribe</button>
        </div>
      </div>

      {/* Instagram Feed */}
      <div className="bg-white py-12 mt-12 text-center">
        <h2 className="text-4xl font-normal mb-6">Follow products and discounts on Instagram</h2>
        <div className="flex justify-center gap-6">
          <div className="w-[186px] h-[186px]">
            <Image src={cata2} alt="Instagram Post" className="object-cover" />
          </div>
          <div className="w-[186px] h-[186px]">
            <Image src={chair5} alt="Instagram Post" className="object-cover" />
          </div>
          <div className="w-[186px] h-[186px]">
            <Image src={chair2} alt="Instagram Post" className="object-cover" />
          </div>
          <div className="w-[186px] h-[186px]">
            <Image src={chair1} alt="Instagram Post" className="object-cover" />
          </div>
          <div className="w-[186px] h-[186px]">
            <Image src={chair3} alt="Instagram Post" className="object-cover" />
          </div>
          <div className="w-[186px] h-[186px]">
            <Image src={newchair} alt="Instagram Post" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
