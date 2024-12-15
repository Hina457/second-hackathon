


// import { FaPlus } from "react-icons/fa";
// export default function Pages(){
//     return(
//         <div>

//             <div className="w-[1320px] h-[731px] ml-[250px] mb-[150px] mt-[150px] ">
//                 <div className="w-[771px] h-[100px]  ml-[250px]">
//                     <h1 className="text-center font-semibold text-[48px]">Questions Looks Here</h1>
//                     <p className="text-[#4F4F4F] text-[16px] font-normal text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
//                 </div>
//                 {/* boxes */}
//                 <div className="grid grid-cols-2 w-[1380px] h-auto  gap-[30px] shadow-xl items-center mt-[100px] ">
//                   <div className="w-[648px] h-[170px] bg-[#F7F7F7] ">
//                   <FaPlus className="float-right mr-5 w-[30px] h-[30px] text-gray-400 mt-2"/>
//                  <h1 className="font-semibold text-[18px] text-[#333333] mt-4 ml-5">What types of chairs do you offer?</h1>
//                  <p className="text-[#4F4F4F] font-normal text-[16px] ml-5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
             
            




//                   </div>
//                   <div className="w-[648px] h-[170px] bg-[#F7F7F7]">
//                   <FaPlus className="float-right mr-5 w-[30px] h-[30px] text-gray-400 mt-2"/>
//                  <h1 className="font-semibold text-[18px] text-[#333333] mt-4 ml-5">What types of chairs do you offer?</h1>
//                  <p className="text-[#4F4F4F] font-normal text-[16px] ml-5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
             
//                   </div>
//                   <div className="w-[648px] h-[170px] bg-[#F7F7F7]">
//                   <FaPlus className="float-right mr-5 w-[30px] h-[30px] text-gray-400 mt-2"/>
//                  <h1 className="font-semibold text-[18px] text-[#333333] mt-4 ml-5">What types of chairs do you offer?</h1>
//                  <p className="text-[#4F4F4F] font-normal text-[16px] ml-5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
             
//                   </div>
//                   <div className="w-[648px] h-[170px] bg-[#F7F7F7]">
//                   <FaPlus className="float-right mr-5 w-[30px] h-[30px] text-gray-400 mt-2"/>
//                  <h1 className="font-semibold text-[18px] text-[#333333] mt-4 ml-5">What types of chairs do you offer?</h1>
//                  <p className="text-[#4F4F4F] font-normal text-[16px] ml-5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
             
//                   </div>
//                   <div className="w-[648px] h-[170px] bg-[#F7F7F7]">
//                   <FaPlus className="float-right mr-5 w-[30px] h-[30px] text-gray-400 mt-2"/>
//                  <h1 className="font-semibold text-[18px] text-[#333333] mt-4 ml-5">What types of chairs do you offer?</h1>
//                  <p className="text-[#4F4F4F] font-normal text-[16px] ml-5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
             
//                   </div>
//                   <div className="w-[648px] h-[170px] bg-[#F7F7F7]">
//                   <FaPlus className="float-right mr-5 w-[30px] h-[30px] text-gray-400 mt-2"/>
//                  <h1 className="font-semibold text-[18px] text-[#333333] mt-4 ml-5">What types of chairs do you offer?</h1>
//                  <p className="text-[#4F4F4F] font-normal text-[16px] ml-5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
             
//                   </div>
//                 </div>
//             </div>
//         </div>
//     )
// }







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
