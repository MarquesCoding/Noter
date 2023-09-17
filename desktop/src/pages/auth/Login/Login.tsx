import React, {useState} from "react";
import Input from "../../../components/core/Input/Input.tsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login: React.FunctionComponent = () => {
    const navigate = useNavigate();
    const [emailShown, setEmailShown] = React.useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = React.useState({
        isError: false,
        isErrorText: ""
    });
    const handleEmailSubmit = () => {
        setEmailShown(true);
        if(emailShown && email === '') {
            //do a request for login with single code
            console.log(email);
            setError({
                isError: true,
                isErrorText: "Please enter an email address for login."
            });
        }else if (emailShown && email !== '') {
            navigate('/setup');
        }
    }


    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center font-light">
            <div className="relative z-10 w-72 flex flex-col gap-4 rounded-lg ">
                {/*<p className="w-full text-center">Login to [Name]</p>*/}
                <div className="w-full text-center cursor-pointer py-2 px-12 rounded border border-gray-200/10 text-sm text-white hover:opacity-80 bg-blue-500">
                    Continue with Google
                </div>
                {emailShown && (
                    <motion.div
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full flex flex-col items-center justify-center gap-8"
                    >
                        <div className="w-full h-0.5 bg-gray-200/10">

                        </div>
                        <Input input={email} setInput={setEmail} placeholder="Email" type={"email"} setError={setError} isError={error.isError} isErrorText={error.isErrorText} />
                    </motion.div>
                )}
                <div onClick={handleEmailSubmit} className="w-full text-center cursor-pointer py-2 px-12 rounded border border-gray-200/10 text-sm text-white/50 hover:opacity-80  bg-gray-500/20">
                    Continue with Email
                </div>
                <div className="w-full text-center cursor-pointer py-2 px-12 rounded border border-gray-200/10 text-sm text-white/50 hover:opacity-80  bg-gray-500/20">
                    Continue with SAML SSO
                </div>
            </div>
        </div>
    )
}
export default Login;