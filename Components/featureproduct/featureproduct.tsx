



import Image from "next/image";
import chair1 from "@/Components/public/chair1.svg";
import chair2 from "@/Components/public/chair2.svg";
import chair3 from "@/Components/public/chair3.svg";
import chair4 from "@/Components/public/chair4.svg";
import newicon from "@/Components/public/new.svg";
import sale from "@/Components/public/sale.svg";
import cart1 from "@/Components/public/cart1.svg";
import cartall from "@/Components/public/cartall.svg";
import cata1 from "@/Components/public/cata1.svg";
import cata2 from "@/Components/public/cata2.svg";
import cata3 from "@/Components/public/cata3.svg";

export default function Feature() {
  return (
    <div className="px-4">
      {/* Featured Products Section */}
      <div className="max-w-screen-xl mx-auto mt-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#272343] mb-8">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Card */}
          {[{ img: chair1, icon: newicon, price: "$20", name: "Library Stool Chair", cart: cart1 },
            { img: chair2, icon: sale, price: "$20", name: "Library Stool Chair", salePrice: "$39", cart: cartall },
            { img: chair3, price: "$20", name: "Library Stool Chair", cart: cartall },
            { img: chair4, price: "$20", name: "Library Stool Chair", cart: cartall },
          ].map((product, index) => (
            <div key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden">
              {product.icon && (
                <Image src={product.icon} alt="icon" className="absolute top-2 left-2 z-10" />
              )}
              <Image src={product.img} alt={product.name} className="w-full" />
              <div className="flex justify-between items-center p-4">
                <div>
                  <p className="text-lg font-bold text-[#007580]">{product.name}</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-lg text-[#272343]">{product.price}</p>
                    {product.salePrice && (
                      <p className="text-sm line-through text-[#9A9CAA]">{product.salePrice}</p>
                    )}
                  </div>
                </div>
                <Image src={product.cart} alt="cart" className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Categories Section */}
      <div className="max-w-screen-xl mx-auto mt-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">Top Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{ img: cata1, name: "Wing Chair", count: "3,584 Products" },
            { img: cata2, name: "Wooden Chair", count: "157 Products" },
            { img: cata3, name: "Desk Chair", count: "154 Products" },
          ].map((category, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden">
              <Image
                src={category.img}
                alt={category.name}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4">
                <h1 className="text-lg font-bold">{category.name}</h1>
                <p className="text-sm">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
