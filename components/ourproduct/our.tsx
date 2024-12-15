



import Image from "next/image";
import chair1 from "@/components/public/chair1.svg";
import chair2 from "@/components/public/chair2.svg";
import chair3 from "@/components/public/chair3.svg";
import chair4 from "@/components/public/chair4.svg";
import newicon from "@/components/public/new.svg";
import sale from "@/components/public/sale.svg";
import cart1 from "@/components/public/cart1.svg";
import cartall from "@/components/public/cartall.svg";
import chair5 from "@/components/public/chair5.svg";
import chair6 from "@/components/public/chair6.svg";
import chair7 from "@/components/public/chair7.svg";

export default function OurProduct() {
  const products = [
    { Image: chair1, icon: newicon, title: "Library Stool Chair", price: "$20", cart: cart1 },
    { Image: chair2, icon: sale, title: "Library Stool Chair", price: "$20", oldPrice: "$39", cart: cartall },
    { Image: chair3, title: "Library Stool Chair", price: "$20", cart: cartall },
    { Image: chair4, title: "Library Stool Chair", price: "$20", cart: cartall },
    { Image: chair5, icon: newicon, title: "Library Stool Chair", price: "$20", cart: cart1 },
    { Image: chair6, icon: sale, title: "Library Stool Chair", price: "$20", oldPrice: "$39", cart: cartall },
    { Image: chair7, title: "Library Stool Chair", price: "$20", cart: cartall },
    { Image: chair1, title: "Library Stool Chair", price: "$20", cart: cartall },
  ];

  return (
    <div className="px-6 py-12">
      {/* section Header  */}
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
            <Image src={product.Image} alt="chair" className="w-full h-48 object-cover" />
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
