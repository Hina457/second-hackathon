



import Image from "next/image";
import chair1 from "@/Components/public/chair1.svg";
import chair2 from "@/Components/public/chair2.svg";
import chair3 from "@/Components/public/chair3.svg";
import chair4 from "@/Components/public/chair4.svg";
import newicon from "@/Components/public/new.svg";
import sale from "@/Components/public/sale.svg";
import cart1 from "@/Components/public/cart1.svg";
import cartall from "@/Components/public/cartall.svg";
import chair5 from "@/Components/public/chair5.svg";
import chair6 from "@/Components/public/chair6.svg";
import chair7 from "@/Components/public/chair7.svg";

export default function OurProduct() {
  const products = [
    { img: chair1, icon: newicon, title: "Library Stool Chair", price: "$20", cart: cart1 },
    { img: chair2, icon: sale, title: "Library Stool Chair", price: "$20", oldPrice: "$39", cart: cartall },
    { img: chair3, title: "Library Stool Chair", price: "$20", cart: cartall },
    { img: chair4, title: "Library Stool Chair", price: "$20", cart: cartall },
    { img: chair5, icon: newicon, title: "Library Stool Chair", price: "$20", cart: cart1 },
    { img: chair6, icon: sale, title: "Library Stool Chair", price: "$20", oldPrice: "$39", cart: cartall },
    { img: chair7, title: "Library Stool Chair", price: "$20", cart: cartall },
    { img: chair1, title: "Library Stool Chair", price: "$20", cart: cartall },
  ];

  return (
    <div className="px-6 py-12">
      {/* Section Header */}
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-[#272343]">Our Products</h1>
      </div>

      {/* Products Grid */}
      <div className="max-w-screen-xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            {/* Badge/Icon */}
            {product.icon && (
              <Image src={product.icon} alt="icon" className="absolute top-2 left-2 w-8 h-8" />
            )}
            {/* Product Image */}
            <Image src={product.img} alt="chair" className="w-full h-48 object-cover" />
            {/* Product Details */}
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="font-bold text-lg text-[#007580]">{product.title}</p>
                <div className="flex items-center">
                  <p className="text-xl text-[#272343]">{product.price}</p>
                  {product.oldPrice && (
                    <p className="ml-2 text-sm text-[#9A9CAA] line-through">{product.oldPrice}</p>
                  )}
                </div>
              </div>
              <Image src={product.cart} alt="cart" className="w-8 h-8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
