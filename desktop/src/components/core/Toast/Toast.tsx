import React, {PropsWithChildren} from "react";
import {CheckSquare, Info, Warning, WarningDiamond, X} from "@phosphor-icons/react";
interface ToastProps {
    type: "success" | "error" | "warning" | "info";
    title: string;
}
const Toast: React.FunctionComponent<PropsWithChildren<ToastProps>> = ({children, title, type}) => {

    const ToastType = (type: string) => {
        switch(type) {
            case "success":
                return (<CheckSquare color="#24BF5F" size={22} weight="fill" />)
            case "error":
                return (<WarningDiamond color="#F54F4E" size={22} weight="fill" />)
            case "warning":
                return (<Warning color="#FEA002" size={22} weight="fill" />)
            case "info":
                return (<Info color="#3554EC" size={22} weight="fill" />)
        }
    }

    return (
            <div className="bg-white min-w-[300px] rounded shadow-lg flex flex-row gap-4 p-2 duration-300">
                <div>
                    {ToastType(type)}
                </div>
                <div>
                    <p className="text-sm font-semibold text-gray-500">{title}</p>
                    {children}
                </div>
                <div className="flex-grow">

                </div>
                <div className="h-full text-gray-500 pl-12 hover:opacity-50 cursor-pointer">
                    <X size={22} />
                </div>
            </div>
    )
}
export default Toast;