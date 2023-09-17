import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

const NavigationAnimation: React.FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0 }}
            >
                {children}
            </motion.div>
        </>
    )
}
export default NavigationAnimation;