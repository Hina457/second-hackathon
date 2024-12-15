



import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import chair from "@/components/public/chair3.svg";
import chair5 from "@/components/public/chair5.svg";

export default function Shop() {
  return (
    <div className="px-4 lg:px-16 py-8">
      {/* Main Container */}
      <div className="flex flex-wrap justify-center lg:justify-between gap-8">
        {/* Left Section */}
        <div className="flex-1 max-w-3xl">
          <p className="font-bold text-xl lg:text-2xl mb-4">Bag</p>
          {/* First Box */}
          <div className="w-full p-4 shadow-lg rounded-lg flex gap-4">
            <Image src={chair} alt="pic" width={150} height={150} className="self-center" />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <p className="text-gray-800 font-medium text-base">Library Stool Chair</p>
                <p className="text-gray-800 font-medium text-sm">MRP: $99</p>
              </div>
              <h1 className="text-gray-500 text-sm mt-2">Ashen Slate/Cobalt Bliss</h1>
              <p className="text-gray-500 text-sm mt-1">Size L | Quantity 1</p>
              <div className="flex gap-4 mt-4">
                <FaRegHeart className="text-gray-400 w-6 h-6 cursor-pointer" />
                <RiDeleteBin6Line className="text-gray-400 w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>
          {/* Second Box */}
          <div className="w-full p-4 shadow-lg rounded-lg flex gap-4 mt-4">
            <Image src={chair5} alt="pic" width={150} height={150} className="self-center" />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <p className="text-gray-800 font-medium text-base">Library Stool Chair</p>
                <p className="text-gray-800 font-medium text-sm">MRP: $99</p>
              </div>
              <h1 className="text-gray-500 text-sm mt-2">Ashen Slate/Cobalt Bliss</h1>
              <p className="text-gray-500 text-sm mt-1">Size L | Quantity 1</p>
              <div className="flex gap-4 mt-4">
                <FaRegHeart className="text-gray-400 w-6 h-6 cursor-pointer" />
                <RiDeleteBin6Line className="text-gray-400 w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full max-w-sm p-6 shadow-lg rounded-lg">
          <h1 className="font-bold text-lg mb-4">Summary</h1>
          {/* Subtotal */}
          <div className="flex justify-between text-sm mb-2">
            <p>Subtotal</p>
            <p>$198.00</p>
          </div>
          {/* Delivery */}
          <div className="flex justify-between text-sm mb-2">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          {/* Total */}
          <div className="flex justify-between text-sm py-4 border-t border-b mb-4">
            <p>Total</p>
            <p>$198.00</p>
          </div>
          {/* Checkout Button */}
          <button className="w-full h-12 rounded-full bg-teal-500 text-white font-semibold">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
