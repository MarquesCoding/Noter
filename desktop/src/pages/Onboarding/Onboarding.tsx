import React from "react";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";

const Onboarding: React.FunctionComponent = () => {
    const [selectedStep, setSelectedStep] = React.useState<number>(0);
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center font-light">
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full flex flex-col items-center justify-center gap-8"
            >
                <div className="w-1/2 h-64 flex flex-col items-center text-center justify-center gap-8">
                {selectedStep === 0 && (
                    <motion.div
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full flex flex-col items-center justify-center gap-8"
                    >
                        <p className="text-5xl font-semibold">Alpha Release</p>
                        <p className="text-white/50 text-center text-sm max-w-md">We are delighted for you to try [name], now in Alpha release, showcasing exciting new features. As with any initial release, this version may contain some bugs. We kindly request your assistance in reporting any issues you encounter on our Discord channel. Your valuable feedback will greatly contribute to enhancing the user experience.</p>
                        <div onClick={() => setSelectedStep(1)} className="w-fit cursor-pointer bg-blue-500 hover:bg-opacity-50 duration-300 cursor-pointer rounded text-sm px-2 py-1 shadow">
                            Continue
                        </div>
                    </motion.div>
                )}
                    {selectedStep === 1 && (
                        <motion.div
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full flex flex-col items-center justify-center gap-8"
                        >
                            Something
                            <div onClick={() => setSelectedStep(2)} className="w-fit cursor-pointer bg-blue-500 hover:bg-opacity-50 duration-300 cursor-pointer rounded text-sm px-2 py-1 shadow">
                                Continue
                            </div>
                        </motion.div>
                    )}
                    {selectedStep === 2 && (
                        <motion.div
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full flex flex-col items-center justify-center gap-8"
                        >
                            Something else
                            <div onClick={() => navigate('/app')} className="w-fit cursor-pointer bg-blue-500 hover:bg-opacity-50 duration-300 cursor-pointer rounded text-sm px-2 py-1 shadow">
                                Continue
                            </div>
                        </motion.div>
                    )}
                </div>
            <div className="w-full h-3  flex items-center justify-center mt-8">
                {Array(3).fill(0).map((_, i) => (
                    <div onClick={() => setSelectedStep(i)} key={i} className={`w-2 h-2 cursor-pointer hover:bg-opacity-50 duration-300 rounded-full mx-1 ${selectedStep === i ? "bg-gray-200" : "bg-gray-500"}`}></div>
                ))}
            </div>
            </motion.div>
        </div>
    )
}
export default Onboarding;