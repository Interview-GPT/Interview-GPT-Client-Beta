import React from 'react';
import '../../styles/workspace.css'

const IDEfooter = () => {
    return(
<div className="flex bg-dark-layer-1 absolute bottom-0 z-10 w-full">
  <div className="mx-5 my-[10px] flex justify-between w-full">
    <div className="mr-2 flex flex-1 flex-nowrap items-center space-x-4">
      <button className="px-3 py-1.5 font-medium items-center transition-all inline-flex text-white text-sm hovtxt rounded-lg pl-3 pr-2">
        Console
        <div className="ml-1 transform transition flex items-center">
          {/* <BsChevronUp className="fill-gray-6 mx-1 fill-dark-gray-6" /> */}
        </div>
      </button>
    </div>
    <div className="ml-auto flex items-center space-x-4">
      <button className="px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex text-white hovtxt rounded-lg">
        Run
      </button>
      <button className="px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-green rounded-lg">
        Submit
      </button>
    </div>
  </div>
</div>
)};
export default IDEfooter;