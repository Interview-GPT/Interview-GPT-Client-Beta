import React from "react";
import "../styles/workspace.css";
import IDEfooter from "./IDE/IDEfooter"
import PreferenceNav from "./IDE/NavPrefIDE";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { python } from "@codemirror/lang-python";

const IDEbar = () => {
  const boilerPlate =`def twoSum(nums, target):
    #Write function here
  `;
  return (
    <>
      <div className="flex flex-col bg-dark-layer5 relative overflow-x-hidden">
        <PreferenceNav />
        <Split
          className="h-[calc(100vh-94px)] "
          direction="vertical"
          sizes={[60, 40]}
          minSize={60}
        >
          <div className="bg-dark-layer5" w-full overflow-auto>
            <CodeMirror
              value={boilerPlate}
              theme={vscodeDark}
              extensions={[python()]}
              style={{ fontSize: 16 }}
            />
          </div>
          <div className="w-full px-5 overflow-auto">
            <div className="flex- h-10 items-center space-x-6">
              <div className="relative flex h-full flex-col justify-center cursor-pointer">
                <div className="text-mdfont-medium leading-5 text-white">
                  TestCases
                </div>
                <hr className="absolute bottom-0 h-0.5 w-20 rounded-full border-none bg-white" />
              </div>
            </div>
            <div className="flex">
              {/*case1*/}
              <div className="mr-2 items-start mt-2 text-white">
                <div className="flex flex-wrap items-center gap-y-4">
                  <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-dark-layer5 hover: bg-dark-layer6 relative rounded-lg px-4 py-1 cursor pointer whitespace-nowrap">
                    case1
                  </div>
                </div>
              </div>
              {/*case2*/}
              <div className="mr-2 items-start mt-2 text-white">
                <div className="flex flex-wrap items-center gap-y-4">
                  <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-dark-layer5 hover: bg-dark-layer6 relative rounded-lg px-4 py-1 cursor pointer whitespace-nowrap">
                    case2
                  </div>
                </div>
              </div>
              {/*case2 */}
              <div className="mr-2 items-start mt-2 text-white">
                <div className="flex flex-wrap items-center gap-y-4">
                  <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-dark-layer5 hover: bg-dark-layer6 relative rounded-lg px-4 py-1 cursor pointer whitespace-nowrap">
                    case3
                  </div>
                </div>
              </div>
              {/*case3*/}
            </div>
            <div ClassName="font-semibold">
              <p className="text-md font-medium mt-4 text-white">Input:</p>
              <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-layer6 border-transparent text-white mt-2 ">
                nums: [2,7,11,15], target: 9
              </div>
              <p className="text-md font-medium mt-4 text-white">Output:</p>
              <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-layer6 border-transparent text-white mt-2 ">
                [0,1]
              </div>
            </div>
          </div>
        </Split>
        <IDEfooter/>
      </div>
    </>
  );
};

export default IDEbar;
