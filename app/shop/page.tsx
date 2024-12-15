

// import Image from "next/image"
// import { FaRegHeart } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import chair from "@/Components/public/chair3.svg"
// import chair5 from "@/Components/public/chair5.svg"
// export default function Shop(){
//     return(
//         <div>
//           <div className="w-[1609px] h-[632px] mt-[100px] flex ml-[120px] mb-[40px] ">
//             <div className="w-[1000px] h-[547px]  mt-[20px] ml-[80px]">
//                 <p className="font-bold text-[30px]">Bag</p>
//                 <div className="w-[963px] h-[211px]  shadow-2xl">
//                     <div className="flex">
//                     <Image src={chair} alt="pic" width={150} height={150} className="pt-6"/>
//                     <div className="w-full h-[105px] mt-5">
//                         <div className="justify-between ">
//                     <p className="float-right mr-[20px] font-normal text-[18px]">MRP: $99</p>
//                     <p className="font-normal text-[16px] ml-5">Library Stool Chair</p>
//                     </div>
                   
//                     <h1 className="text-[#757575] ml-5 text-[16px] mt-4">Ashen Slate/Cobalt Bliss</h1>
//                     <p className="text-[#757575] ml-5 mt-1 gap-4">Size  L   Quantity  1</p>
//                     <div className="ml-5 flex gap-6 mt-5">
//                     <FaRegHeart className="w-[30px] h-[30px]"/>
//                     <RiDeleteBin6Line className="w-[30px] h-[30px]"/>
//                     </div>

//                     </div>
//                     </div>
//                     </div>
//                     {/* second box */}
//                     <div className="w-[963px] h-[211px]  shadow-2xl mt-4">
//                     <div className="flex">
//                     <Image src={chair5} alt="pic" width={150} height={150} className="pt-6"/>
//                     <div className="w-full h-[105px] mt-5">
//                         <div className="justify-between ">
//                     <p className="float-right mr-[20px] font-normal text-[18px]">MRP: $99</p>
//                     <p className="font-normal text-[16px] ml-5">Library Stool Chair</p>
//                     </div>
                   
//                     <h1 className="text-[#757575] ml-5 text-[16px] mt-4">Ashen Slate/Cobalt Bliss</h1>
//                     <p className="text-[#757575] ml-5 mt-1 gap-4">Size  L   Quantity  1</p>
//                     <div className="ml-5 flex gap-6 mt-5">
//                     <FaRegHeart className="w-[30px] h-[30px]"/>
//                     <RiDeleteBin6Line className="w-[30px] h-[30px]"/>
//                     </div>

//                     </div>
//                     </div>
                 
                
//                 </div>
//             </div>
//             {/* right box */}
//             <div className="w-[350px] h-[295px] mt-[20px]">
//                 <h1 className="font-bold text-[21px]">Summary</h1>
//                 <div className="w-[334px] flex justify-between h-[28px] mt-3">
//                     <p className="font-normal text-[15px]">Subtotal</p>
//                     <p  className="font-normal text-[15px]">$198.00</p>
//                 </div>

//                 {/* second */}
//                 <div className="w-[334px] flex justify-between mt-4 h-[28px] ">
//                     <p className="font-normal text-[15px]">Estimated Delivery & Handling</p>
//                     <p  className="font-normal text-[15px]">Free</p>
//                 </div>


//                 {/* box 3 */}

//                 <div className="w-[340px] flex justify-between mt-4 h-[62px]  border-b border-t ">
//                     <p className="font-normal text-[15px]">Total</p>
//                     <p  className="font-normal text-[15px]">$198.00</p>
//                 </div>

//                 {/* button */}
//                 <button className="w-[334px] h-[60px] rounded-[30px] bg-[#029FAE] text-white mt-5">Member Checkout</button>
//             </div>
//           </div>
//         </div>
//     )
// }














import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import chair from "@/Components/public/chair3.svg";
import chair5 from "@/Components/public/chair5.svg";

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
