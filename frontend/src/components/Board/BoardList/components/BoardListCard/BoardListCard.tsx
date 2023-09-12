import React from "react";
import {BoardTableItem} from "../../../BoardTable/BoardTable";

interface BoardListCardProps {
  item: BoardTableItem;
}

const BoardListCard: React.FunctionComponent<BoardListCardProps> = (props) => {
  return (
    <div className="min-h-40 h-auto select-none rounded-lg border border-[#D4D9FF]/20 hover:bg-[#2E3044] cursor-pointer duration-300 hover:border-[#D4D9FF]/50 w-full flex flex-col gap-2 items-center p-4">
      <div className="w-full h-auto flex">
        <div className="bg-[#333547] rounded border text-xs p-1 border-[#D4D9FF]/20">
          <p className="opacity-50">{props.item.ticketNumber}</p>
        </div>
      </div>
      <div>
        <p className="line-clamp-2">{props.item.title}</p>
        <p className="opacity-50 truncate line-clamp-2">{props.item.description}</p>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-full h-auto flex">
            <div className="bg-[#333547] rounded border text-xs p-1 border-[#D4D9FF]/20">
              <div className="w-3 h-3 rounded-full bg-indigo-700 border-2 border-white"></div>
            </div>
          </div>
          <div className="w-fit py-1 px-1 rounded bg-indigo-700 text-xs">
            Backend
          </div>
        </div>
        <div className="w-6 h-6  rounded-full flex bg-[#2E3044] border border-[#D4D9FF]/20 items-center justify-center">
          {props.item.assignee?.charAt(0)}
        </div>
      </div>
    </div>
  )
}
export default BoardListCard;
