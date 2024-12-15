





import { FaPlus } from "react-icons/fa";

export default function Pages() {
  return (
    <div className="px-4 lg:px-16 py-8">
      {/* Header Section */}
      <div className="max-w-[1320px] mx-auto text-center space-y-4 mb-12">
        <h1 className="text-2xl lg:text-4xl font-semibold">
          Questions Look Here
        </h1>
        <p className="text-gray-500 text-sm lg:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
      </div>

      {/* FAQ Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1320px] mx-auto">
        {/* FAQ Card */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <h1 className="text-lg font-semibold text-gray-800">
                What types of chairs do you offer?
              </h1>
              <FaPlus className="text-gray-400 w-6 h-6" />
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
