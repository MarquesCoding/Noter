import BoardTable, {BoardTableItem} from "../../components/Board/BoardTable/BoardTable";
import React, {useEffect} from "react";
import {motion} from "framer-motion";



const Overview: React.FunctionComponent = () => {


  return (
    <>
      Hello
      <motion.div
        animate={{
          opacity: [0, 100],
        }}
        transition={{
          duration: 1
        }}
      >
        <div className="w-full h-screen overflow-auto p-8">
          {/*<BoardTable title={"Board"} items={BoardItems}/>*/}
          {/*<BoardTable title={"Backlog"} items={BacklogItems}/>*/}
        </div>
      </motion.div>
    </>
  )
}
export default Overview;
