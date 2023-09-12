import React from "react";
import {
  CaretUpDown,
  SignOut,
  Check,
  MagnifyingGlass,
  Command,
  DotsSixVertical,
  Plus
} from "@phosphor-icons/react";
import {useNavigate} from "react-router-dom";
import { Popover, Transition } from '@headlessui/react'
import Tooltip from "../core/Tooltip/Tooltip";

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:w-72 border gap-2 border-r-gray-100 w-auto h-screen bg-white items-center flex flex-col p-4 shadow-lg overflow-x-hidden">
      <Popover className="relative focus:ring-0 focus:ring-offset-0 border-0 flex flex-col items-center">
        {({ open }) => (
          <>
            <Popover.Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 flex items-start text-start focus:ring-0 focus:ring-offset-0 border-0">
              <div className="w-full h-auto flex lg:justify-between items-center justify-center border border-white hover:bg-gray-100/50 cursor-pointer hover:border-gray-100 rounded-lg p-2 duration-100 transition-all ">
                <div className="flex-row gap-2 flex items-center w-auto">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-700">
                    M
                  </div>
                  <div className="lg:flex flex-col hidden w-40">
                    <p className="font-semibold text-sm text-black line-clamp-1">Marques' Organisation</p>
                    <p className="text-xs text-gray-400/80">Free Tier</p>
                  </div>
                  <div className="lg:flex hidden items-center justify-center text-gray-400/80 text-xs w-auto">
                    <CaretUpDown size={18} />
                  </div>
                </div>
              </div>
            </Popover.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              className="absolute z-10 w-auto bg-white shadow-lg top-14 rounded-lg border border-gray-500/20"
            >
              <Popover.Panel>
                <Tooltip content="Development - Team Plan" openOnMobile={true}>
                  <div className="select-none w-full h-auto flex lg:justify-between items-center first:rounded-t-lg last:rounded-b-lg justify-center cursor-pointer duration-100 transition-all ">
                  <div className="flex-row gap-2 flex items-center w-auto p-2 ">
                    <div className="lg:flex cursor-grab hidden items-center justify-center text-gray-400/80 text-xs w-auto">
                      <DotsSixVertical size={18} />
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-400">
                      D
                    </div>
                    <div className="lg:flex flex-col hidden w-40">
                      <p className="font-semibold text-sm text-black line-clamp-1">Development</p>
                      <div className="text-xs text-gray-400/80 flex gap-2 w-full">
                        <p className="w-2/3 line-clamp-1">Team Plan</p>
                        <p className="w-full">556 Members</p>
                      </div>
                    </div>
                  </div>
                </div>
                </Tooltip>
                <Tooltip content="Marques' Organisation - Free Plan" openOnMobile={true}>
                  <div className="select-none w-full h-auto flex lg:justify-between items-center bg-indigo-700/10 first:rounded-t-lg last:rounded-b-lg justify-center cursor-pointer duration-100 transition-all ">
                  <div className="flex-row gap-2 flex items-center w-auto p-2 ">
                    <div className="cursor-grab lg:flex hidden items-center justify-center text-gray-400/80 text-xs w-auto">
                      <DotsSixVertical size={18} />
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-700">
                      M
                    </div>
                    <div className="lg:flex flex-col hidden w-40">
                      <p className="font-semibold text-sm text-black line-clamp-1">Marques' Organisation</p>
                      <div className="text-xs text-gray-400/80 flex gap-2 w-full">
                        <p className="w-2/3 line-clamp-1">Free Plan</p>
                        <p className="w-full">1 Member</p>
                      </div>
                    </div>
                    <div className="lg:flex hidden items-center justify-center text-gray-400/80 text-xs w-auto">
                      <Check size={18} />
                    </div>
                  </div>
                </div>
                </Tooltip>
                <Tooltip content="Support Tickets - Enterprise Plan" openOnMobile={true}>
                  <div className="select-none w-full h-auto flex lg:justify-between items-center first:rounded-t-lg last:rounded-b-lg justify-center cursor-pointer duration-100 transition-all ">
                    <div className="flex-row gap-2 flex items-center w-auto p-2 ">
                      <div className="lg:flex cursor-grab hidden items-center justify-center text-gray-400/80 text-xs w-auto">
                        <DotsSixVertical size={18} />
                      </div>
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-green-400">
                        S
                      </div>
                      <div className="lg:flex flex-col hidden w-40">
                        <p className="font-semibold text-sm text-black line-clamp-1">Support Tickets</p>
                        <div className="text-xs text-gray-400/80 flex gap-2">
                          <p className="w-2/3 line-clamp-1">Enterprise Plan</p>
                          <p className="w-full">2.5K Members</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tooltip>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <Tooltip content="Search" openOnMobile={true}>
        <div className="w-full h-auto px-2 py-1.5 lg:bg-gray-300/10 rounded-lg lg:border-2 hover:border-gray-500/20 lg:border-gray-500/5 flex flex-row justify-between duration-100 transition-colors cursor-pointer">
          <div className="flex w-full lg:w-auto items-center justify-center text-gray-400/80 gap-2">
            <MagnifyingGlass size={18} />
            <p className="opacity-50 text-sm hidden lg:flex">Search</p>
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
            <div className="flex flex-row gap-2 hover:bg-gray-500/10 p-2 cursor-pointer rounded-lg items-center lg:w-full h-auto duration-100 transition-all">
              <div className="bg-red-500/50 border border-red-400/80 w-5 h-5 rounded-md">
              </div>
              <div className="text-sm text-black/90 hidden lg:flex w-2/4">
                <p className="line-clamp-1 w-full">
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
              <p className="line-clamp-1 w-full">
                Development
              </p>
            </div>
          </div>
          </Tooltip>
          <Tooltip content="Add New Board" openOnMobile={true}>
            <div className="flex flex-row gap-2 hover:bg-gray-500/10 p-2 cursor-pointer rounded-lg items-center lg:w-full h-auto duration-100 transition-all">
              <div className="border border-gray-400/50 text-gray-400 w-5 h-5 rounded-md flex items-center justify-center duration-100 transition-all">
                <Plus size={14} />
              </div>
              <p className="text-sm text-black/30 hidden lg:flex">Add New Board</p>
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="flex grow">

      </div>
      <div className="w-full h-auto flex lg:justify-between items-center justify-center pt-4 relative">
        <div className="w-full h-0.5 bg-gray-100 absolute top-0">
        </div>
        <div className="flex-row gap-2 flex items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg">
            <img className="bg-cover object-cover rounded-lg w-9 h-9" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b"/>
          </div>
          <div className="lg:flex flex-col hidden">
            <p className="font-semibold text-sm text-black">Marques Scripps</p>
            <p className="text-xs text-gray-400/80">marques@mscripps.com</p>
          </div>
        </div>
        <div className="lg:flex hidden items-center justify-center text-gray-400/80 text-xs">
          <SignOut size={18} />
        </div>
      </div>
    </div>
  )
}
export default SideMenu;
