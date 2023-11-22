import React from "react";
import { AiOutlineFullscreen, AiOutlineSetting } from "react-icons/Ai";
import "../styles/workspace.css";

const PreferenceNav = () => {
    return (
      <div className="flex items-center justify-between bg-dark-layer3 h-11 w-full">
        <div className="flex items-center text-white">
          <button className="flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover: px-2 py-1.5 font-medium">
            <div className="flex items-center p-1">
              <div className=" rounded text-md bg-dark-layer4 p-3 rounded">
                JavaScript
              </div>
            </div>
          </button>
        </div>
        <div className="flex items center m-2">
          <button className="preferenceBtn group">
            <div className="h-4 w-4 text-dark-gray-6 font-bold text-lg">
              {<AiOutlineSetting /> }
            </div>
            <div className="preferenceBtn-tooltip">Settings</div>
          </button>
        </div>
      </div>
    );
}
export default PreferenceNav