import React from "react";
import {useNavigate} from "react-router-dom";

const Landing: React.FunctionComponent = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center">
                Landing Page
                <div onClick={() => navigate('/signin')} className="w-fit cursor-pointer bg-blue-500 hover:bg-opacity-50 duration-300 cursor-pointer rounded text-sm px-2 py-1 shadow">
                    Sign In
                </div>
            </div>
        </>
    )
}
export default Landing;