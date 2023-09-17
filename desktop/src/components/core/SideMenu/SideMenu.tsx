import {
  SignOut,
  MagnifyingGlass,
  Command,
  Plus
} from "@phosphor-icons/react";
import Tooltip from "../Tooltip/Tooltip.tsx";
import Dropdown from "../Dropdown/Dropdown.tsx";
import {CreateSettingDropdownItems } from "./SettingDropdownItems.ts";
import OrgSelector from "../OrgSelector/OrgSelector.tsx";

const SideMenu = () => {
  return (
    <div className="absolute z-10 duration-300 lg:min-w-[294px] transition-all border-r gap-2 border-[#323B45] h-screen bg-[#161B22] items-center flex flex-col p-4 shadow-lg overflow-x-hidden text-white">
      <OrgSelector />
      <Tooltip content="Search" openOnMobile={true}>
        <div className="w-full h-auto px-2 py-1.5 lg:bg-gray-300/10 rounded-lg lg:border-2 hover:border-gray-500/20 lg:border-gray-500/5 flex flex-row justify-between duration-100 transition-colors cursor-pointer">
          <div className="flex w-full lg:w-auto items-center justify-center text-gray-400/80 gap-2">
            <MagnifyingGlass size={18} />
            <input placeholder="Search" className="lg:flex hidden w-full text-light text-sm bg-transparent placeholder:text-gray-400/80 text-white opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/0 focus-visible:ring-opacity-75"/>
          </div>
          <div className="lg:flex hidden items-center justify-center bg-gray-500/10 rounded px-1 text-gray-600">
            <Command size={15} />
            <p className="opacity-50 text-xs">1</p>
          </div>
        </div>
      </Tooltip>
      <div className="w-full h-auto flex flex-col pt-2">
        <p className="text-gray-400/50 text-sm pl-2 hidden lg:flex">Boards</p>
        <div className="pt-2 flex flex-col items-center lg:items-start w-full">
          <Tooltip content="Support Tickets" openOnMobile={true}>
            <div className="flex flex-row gap-2 bg-gray-500/10 p-2 cursor-pointer rounded-lg items-center lg:w-full h-auto duration-100 transition-all">
              <div className="bg-red-500/50 border border-red-400/80 w-5 h-5 rounded-md">
              </div>
              <div className="text-sm text-black/90 hidden lg:flex justify-between w-2/4">
                <p className="line-clamp-1 w-full text-white/80">
                  Support Tickets
                </p>
              </div>
            </div>
          </Tooltip>
          <Tooltip content="Development" openOnMobile={true}>
            <div className="flex flex-row gap-2 hover:bg-gray-500/10 p-2 cursor-pointer rounded-lg items-center lg:w-full h-auto duration-100 transition-all">
            <div className="bg-green-500/50 border border-green-400/80 w-5 h-5 rounded-md">
            </div>
            <div className="text-sm text-black/90 hidden lg:flex w-2/4">
              <p className="line-clamp-1 w-full text-white/80 text-light">
                Development
              </p>
            </div>
          </div>
          </Tooltip>
          <Tooltip content="Add New Board" openOnMobile={true}>
            <div className="flex flex-row gap-2  hover:bg-gray-500/10 p-2 cursor-pointer rounded-lg items-center lg:w-full h-auto duration-100 transition-all">
              <div className="border border-gray-400/50 text-gray-400 w-5 h-5 rounded-md flex items-center justify-center duration-100 transition-all">
                <Plus size={14} />
              </div>
              <div className="text-sm text-black/90 hidden lg:flex w-2/4">
                <p className="line-clamp-1 w-full text-white/20 text-light">
                  Add New Board
                </p>
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="flex grow">

      </div>
      <div className="w-full h-auto flex lg:justify-between items-center justify-center pt-4 relative">
        <div className="w-full h-0.5 bg-[#1C2127] absolute top-0">
        </div>
        <div className="flex-row gap-2 flex items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg">
            <img className="bg-cover object-cover rounded-lg w-9 h-9" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b"/>
          </div>
          <div className="lg:flex flex-col hidden">
            <p className="text-sm text-white/80">Marques Scripps</p>
            <p className="text-xs text-gray-400/80">marques@mscripps.com</p>
          </div>
        </div>
            <Dropdown dropdownItems={CreateSettingDropdownItems()}>
              <div className="lg:flex hidden items-center justify-center text-gray-400/80 text-xs hover:bg-blue-100/10 duration-300 p-2 rounded-lg border border-white/10 cursor-pointer hover:border-gray-100/20 ">
                <SignOut size={18} />
              </div>
            </Dropdown>
      </div>
    </div>
  )
}
export default SideMenu;
