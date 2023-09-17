import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import './main.css'
import {
  BrowserRouter,
    Link,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding.tsx";
import SideMenu from "./components/core/SideMenu/SideMenu.tsx";
import Login from "./pages/auth/Login/Login.tsx";
import Landing from './pages/Landing/Landing.tsx';
import SettingsSideMenu from './components/core/SettingsSideMenu/SettingsSideMenu.tsx';
import Plans from './pages/Org/Settings/Plans/Plans.tsx';
import {AnimatePresence } from 'framer-motion';
import NavigationAnimation from './components/core/NavigationAnimation/NavigationAnimation.tsx';
import Profile from './pages/Account/Profile/Profile.tsx';
import Overview from './pages/Org/Overview/Overview.tsx';
import Default from './pages/Org/Default/Default.tsx';

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}


const App: React.FunctionComponent = () => {
    const location = useLocation();
    return (
        <>
                <div className="relative flex flex-col h-screen w-screen overflow-hidden bg-[#0D1117] text-white">
                        <AnimatePresence mode="wait">
                                <Routes location={location} key={location.pathname}>
                                    <Route path="/" element={
                                        <NavigationAnimation>
                                            <Landing/>
                                        </NavigationAnimation>
                                    } />
                                    <Route path="/app" element={
                                        <NavigationAnimation><SideMenu/><Default/></NavigationAnimation>
                                    } />
                                    <Route path="/setup" element={
                                        <NavigationAnimation>
                                            <Onboarding/>
                                        </NavigationAnimation>
                                    } />
                                    <Route path="/signin" element={
                                        <NavigationAnimation>
                                            <Login/>
                                        </NavigationAnimation>
                                    } />
                                    <Route path="/settings/overview" element={
                                        <>
                                            <SettingsSideMenu/>
                                            <NavigationAnimation>
                                                <Overview/>
                                            </NavigationAnimation>
                                        </>
                                    } />
                                    <Route path="/settings/plans" element={
                                        <>
                                            <SettingsSideMenu/>
                                            <NavigationAnimation>
                                                <Plans/>
                                            </NavigationAnimation>
                                        </>
                                    } />
                                    <Route path="/settings/profile" element={
                                        <>
                                            <SettingsSideMenu/>
                                            <NavigationAnimation>
                                                <Profile/>
                                            </NavigationAnimation>
                                        </>
                                    } />
                                    <Route path="/*" element={
                                        <NavigationAnimation>
                                            <div className="w-screen h-screen flex items-center justify-center flex-col gap-4">
                                                This organisation does not exist.
                                                <Link to={'/'} className="w-fit cursor-pointer bg-blue-500 hover:bg-opacity-50 duration-300 cursor-pointer rounded text-sm px-2 py-1 shadow">
                                                    Home
                                                </Link>
                                            </div>
                                        </NavigationAnimation>
                                    } />
                                </Routes>
                        </AnimatePresence>
                </div>
        </>
    )
}




root.render(<AppRoutes />);
