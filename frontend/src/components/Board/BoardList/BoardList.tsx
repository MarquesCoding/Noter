import React from "react";
import { BoardTableItem} from "../BoardTable/BoardTable";
import BoardListCard from "./components/BoardListCard/BoardListCard";


interface BoardListProps {
  title: string;
  items: BoardTableItem[];
}


const BoardList: React.FunctionComponent<BoardListProps> = (props) => {
  return (
    <div className="w-80 h-full bg-[#333547]/30 flex flex-col rounded">
      <div className="w-full h-auto py-2 px-2 flex items-center rounded-t gap-2">
        <p className="uppercase opacity-20 text-sm font-bold">{props.title}</p>
        <div className="px-2 bg-[#333547] rounded-full flex items-center">
          <p className="uppercase opacity-20 text-sm  ">{props.items.length}</p>
        </div>
      </div>
      <div className="h-full w-full rounded-b items-center flex flex-col gap-2 px-2 overflow-auto pb-2">
        {props.items.map((item, _i) => (
          <BoardListCard key={_i} item={item}  />
        ))}
      </div>
    </div>
  )
}
export default BoardList;
