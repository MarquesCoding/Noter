import { Menu, Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export interface DropdownProps {
    dropdownItems: {
        items: {
            label: string;
            endpoint: string;
        }[];
    }[];
}

const Dropdown: React.FunctionComponent<PropsWithChildren<DropdownProps>> = ({children, dropdownItems}) => {
    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <Menu.Button>
                    {children}
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="bottom-full absolute right-0 mb-2 w-56 origin-top-right divide-y divide-gray-100/10 rounded-md bg-[#1C2127] border border-gray-500/20 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {dropdownItems.map((item, index) => (
                            <div key={index} className="px-1 py-1 ">
                                {item.items.map((item, index) => (
                                    <Menu.Item key={index}>
                                        <Link to={item.endpoint} className="group cursor-pointer flex w-full items-center rounded-md px-2 py-1 text-gray-400/80 hover:text-gray-200 text-sm hover:bg-gray-400/20">
                                            {item.label}
                                        </Link>
                                    </Menu.Item>
                                ))}
                            </div>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}
export default Dropdown;