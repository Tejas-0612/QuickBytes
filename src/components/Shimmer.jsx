import React from "react";

const ShimmerCard = () => {
  return (
    <div className="animate-pulse mx-auto z-0 flex flex-col md:flex-row w-[85%] md:w-8/12 rounded-xl border-[2px] border-white h-auto md:h-[345px] shadow-2xl drop-shadow-2xl">
      <div className="md:w-[38%]">
        <p className="w-[96%] mx-auto m-3 rounded-md h-[200px] md:h-[93%] bg-gray-400"></p>
      </div>
      <div className="md:w-[62%] ml-4 py-4 px-2">
        <h3 className="w-full h-[12%] bg-gray-400"></h3>
        <div className="flex mt-2">
          <p className="w-3/6 h-[2%] my-2 py-2 bg-gray-400"></p>
        </div>
        <div className="mt-5">
          <p className="py-2 text-base my-2 mr-5 bg-gray-400"></p>
          <p className="py-2 text-base my-2 mr-4 bg-gray-400"></p>
          <p className="py-2 text-base my-2 mr-4 bg-gray-400"></p>
          <p className="py-2 text-base my-2 mr-4 bg-gray-400"></p>
          <p className="w-[70%]  py-2 text-base my-2 pr-3 text-pretty bg-gray-400"></p>
        </div>
        <p className="w-2/5 py-2 text-base pr-3 mt-16 mb-1 bg-gray-400"></p>
      </div>
      {/* <div className='z-0 flex flex-col md:flex-row md:w-8/12 rounded-xl border-[2px] border-white h-auto md:h-[345px] shadow-xl drop-shadow-2xl'>
    <div className='md:w-[38%]'>
      <p className='w-full m-3 rounded-md h-[93%] bg-gray-600' ></p>  
    </div>
    <div className='md:w-[62%] ml-4 py-4 px-2'>
      <h3 className='w-full h-[12%] bg-gray-600'></h3>
      <div className='flex mt-2'>
         <p className='w-3/5 h-[2%] my-2  py-2  bg-gray-600'></p> 
      </div>
      <p className='py-2 text-base my-2 pr-3 text-pretty  bg-gray-600'></p>
      <p className='py-2 text-base my-2 pr-3 text-pretty  bg-gray-600'></p>
      <p className='py-2 text-base my-2 pr-3 text-pretty  bg-gray-600'></p>
      <p className='py-2 text-base my-2 pr-3 text-pretty  bg-gray-600'></p>
      <p className='py-2 text-base my-2 pr-3  bg-gray-600'></p>
      <p className='w-2/5 py-2 text-base pr-3 mb-1 bg-gray-600'></p>
    </div>
  </div> */}
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(6)
        .fill("")
        .map((item, index) => {
          return <ShimmerCard key={index} />;
        })}
    </div>
  );
};

export const ImgShimmer = () => {
  return (
    <p className="animate-pulse w-full m-3 rounded-md h-[200px] md:h-[93%] bg-gray-300 "></p>
  );
};
export default Shimmer;
