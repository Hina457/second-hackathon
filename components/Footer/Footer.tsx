








import logo from "@/components/public/logo.svg";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import visa from "@/components/public/visa.svg";

export default function Footer() {
  return (
    <div>
      {/* Footer Main Section */}
      <div className="bg-white border-t border-gray-300">
        <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-16 flex flex-wrap gap-y-8">
          {/* Logo and Social Media */}
          <div className="w-full lg:w-1/3 space-y-4">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="logo" />
              <p className="text-xl font-semibold">Comforty</p>
            </div>
            <p className="text-gray-500 text-sm leading-6">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>
            <div className="flex gap-3">
              <div className="w-6 h-6 mb-6 flex items-center justify-center border border-[#007580] rounded-full">
                <FaFacebook className="text-[#007580] hover:scale-105" />
              </div>
              <FaTwitter className="text-lg hover:text-[#007580] hover:scale-105" />
              <FaInstagram className="text-lg hover:text-[#007580] hover:scale-105" />
              <FaPinterest className="text-lg hover:text-[#007580] hover:scale-105  " />
              <FaYoutube className="text-lg hover:text-[#007580] hover:scale-105" />
            </div>
          </div>

          {/* Categories Section */}
          <div className="w-full sm:w-1/2 lg:w-1/6">
            <h3 className="text-gray-500 text-base font-semibold">Category</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="hover:text-[#007580] ">Sofa</li>
              <li  className="hover:text-[#007580]">Armchair</li>
              <li  className="hover:text-[#007580]">Wing Chair</li>
              <li  className="hover:text-[#007580]">Desk Chair</li>
              <li  className="hover:text-[#007580]">Wooden Chair</li>
              <li  className="hover:text-[#007580]">Park Bench</li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full sm:w-1/2 lg:w-1/6">
            <h3 className="text-gray-500 text-base font-semibold">Support</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="hover:text-[#007580]">Help & Support</li>
              <li className="hover:text-[#007580]">Terms & Conditions</li>
              <li className="hover:text-[#007580]">Privacy Policy</li>
              <li className="hover:text-[#007580]">Help</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-gray-500 text-base font-semibold">Newsletter</h3>
            <form className="mt-4 space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#029FAE]"
              />
              <button className="w-full py-3 bg-[#029FAE] text-white rounded-md hover:bg-[#027d85] hover:scale-105">
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-white border-t border-gray-300">
        <div className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; 2021 - Blogy - Designed & Developed by <span className="text-[#029FAE]">Zakirsoft</span>
          </p>
          <Image src={visa} alt="visa card" className="mt-4 md:mt-0" />
        </div>
      </div>
    </div>
  );
}
