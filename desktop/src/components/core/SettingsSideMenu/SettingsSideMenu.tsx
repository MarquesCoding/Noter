import { SignOut } from "@phosphor-icons/react";
import Dropdown from "../Dropdown/Dropdown.tsx";
import {CreateSettingDropdownItems} from "../SideMenu/SettingDropdownItems";
import {useLocation, useNavigate } from "react-router-dom";
import OrgSelector from "../OrgSelector/OrgSelector.tsx";
import { SettingsSelection } from "./SettingsSelection.ts";

export interface SettingsSideMenuProps {
    navigationItems: {
        name: string;
        items: {
            name: string;
            available?: boolean;
            url: string;
        }[];
    }[];
}

const SettingsSideMenu : React.FunctionComponent= () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className="absolute z-10 duration-300 lg:min-w-[294px] transition-all border-r gap-2 border-[#323B45] h-screen bg-[#161B22] flex flex-col p-4 shadow-lg overflow-x-hidden text-white">
            <OrgSelector />
            <div className="px-2 py-2 text-sm flex flex-col gap-12">
                {SettingsSelection().navigationItems.map((item, index) => (
                    <div key={index}>
                        <p className="mb-2 text-gray-500/80">{item.name}</p>
                        <ul className="text-white/80 flex flex-col">
                            {item.items.map((subItem, subIndex) => (
                                <li key={subIndex} className={`cursor-pointer select-none flex flex-row justify-between ${location.pathname === subItem.url ? 'bg-gray-700/50' : ''} hover:bg-gray-700/50 px-2 py-1 rounded ${subItem.available ? 'cursor-not-allowed' : ''}`} onClick={() => navigate(subItem.url)}>{subItem.name} {subItem.available ? <div className="px-1 p-0.5 bg-blue-500 rounded-full w-fit text-xs">Coming soon</div> : null}</li>
                            ))}
                        </ul>
                    </div>
                ))}
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
export default SettingsSideMenu;
