import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import './main.css'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import React, {useEffect} from "react";
import SideMenu from "components/SideMenu/SideMenu";
import Overview from 'pages/Overview/Overview';
import { motion } from 'framer-motion';
import Kanban from "./pages/Kanban/Kanban";

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <>
    <BrowserRouter>
      <div className="w-screen h-screen bg-gray-500/10 text-white flex relative overflow-hidden">
        <motion.div
          animate={{
            opacity: [0, 100],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
        >
          <SideMenu/>
        </motion.div>
        <div className="w-full h-screen flex flex-col relative">
          <div className="w-full flex gap-4 flex-col p-8">
            <Routes>
              <Route path="/" element={<Overview/>} />
              <Route path="/kanban" element={<Kanban/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </>
)
