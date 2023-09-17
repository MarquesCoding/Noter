import { Popover, Transition } from "@headlessui/react";
import { CaretUpDown, DotsSixVertical } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Tooltip from "../Tooltip/Tooltip";

const OrgSelector: React.FunctionComponent = () => {
    const navigate = useNavigate();
    return (
        <>
            <Popover className="relative z-10 duration-300 transition-all focus:ring-0 focus:ring-offset-0 border-0 flex flex-col items-center rounded-lg">
                {({ open }) => (
                    <>
                        <Popover.Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white/0 focus-visible:ring-opacity-75 flex items-start text-start focus:ring-0 focus:ring-offset-0 ">
                            <div className="w-full h-auto flex lg:justify-between items-center justify-center hover:bg-gray-500/10 cursor-pointer rounded-lg p-2 duration-100 transition-all ">
                                <div className="flex-row gap-2 flex items-center w-auto">
                                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-700">
                                        M
                                    </div>
                                    <div className="lg:flex flex-col hidden w-40">
                                        <p className="text-sm  line-clamp-1 text-white/80">Marques Organisation</p>
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
                            className="absolute z-10 duration-300 transition-all w-auto bg-[#1C2127] shadow-lg top-14 rounded-lg border border-gray-500/20"
                        >
                            <Popover.Panel>
                                <div onClick={() => navigate('/org/board/')}>
                                    <Tooltip content="Development - Team Plan" openOnMobile={true}>
                                        <div className="select-none w-full h-auto flex lg:justify-between items-center first:rounded-t-lg last:rounded-b-lg justify-center cursor-pointer duration-100 transition-all ">
                                            <div className="flex-row gap-2 flex items-center w-auto p-2">
                                                <div className="cursor-grab items-center justify-center text-white/80 text-xs w-auto">
                                                    <DotsSixVertical size={18} />
                                                </div>
                                                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-400">
                                                    D
                                                </div>
                                                <div className="lg:flex flex-col hidden w-40">
                                                    <p className="text-sm line-clamp-1 text-white">Development</p>
                                                    <div className="text-xs text-gray-400/80 flex gap-2 w-full">
                                                        <p className="w-2/3 line-clamp-1 font-light text-white/80">Team Plan</p>
                                                        <p className="w-full font-light text-white/80">556 Members</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tooltip>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </>
    )
}
export default OrgSelector;