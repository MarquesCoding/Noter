import React from "react";

interface InputProps {
    label?: string;
    input: string;
    setInput?: (s: string) => void;
    type: "text" | "password" | "email" | "number";
    placeholder?: string;
    isError?: boolean;
    isErrorText?: string;
    setError?: ({isError, isErrorText}: {isError: boolean, isErrorText: string}) => void;
}

const Input: React.FunctionComponent<InputProps> = (props) => {
    return (
        <div className="flex flex-col gap-0.5 text-start w-72">
            <div className={`w-full h-auto px-2 py-2 bg-gray-500/20 rounded flex flex-row justify-between duration-100 transition-colors cursor-pointer ${props.isError ? 'border-2 hover:border-red-500/50 border-red-500' : 'border border-gray-200/10'}`}>
                <div className="w-full flex items-center justify-center text-gray-400/80 gap-2">
                    {props.label && (
                        <p className="opacity-50 text-sm hidden lg:flex">{props.label}</p>
                    )}
                    <input onChange={(e) => {
                        if(props.setError) {
                            props.setError({
                                isError: false,
                                isErrorText: ""
                            });
                        }
                        props.setInput(e.target.value);
                    }} className="w-full text-sm bg-transparent placeholder:text-gray-400/80 text-white opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/0 focus-visible:ring-opacity-75" type={props.type} placeholder={props.placeholder}/>
                </div>
            </div>
            {props.isError && (
                <p className="text-xs text-red-500">{props.isErrorText}</p>
            )}
        </div>
    )
}
export default Input;