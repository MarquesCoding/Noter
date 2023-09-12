import React from "react";

export type BoardItemType = "bug" | "feature" | "task" | "improvement";

export interface BoardTableItem {
  title: string;
  description: string;
  markdown: string;
  ticketNumber: string;
  tag?: {
    color: string;
    text: string;
  }
  image?: string;
  type: BoardItemType;
  priority: number;
  storyPoints: number;
  assignee?: string;
}

interface BoardTableProps {
  title: string;
  items: BoardTableItem[];
}

const BoardTable: React.FunctionComponent<BoardTableProps> = (props) => {
  return (
    <div className="w-full h-auto py-4">
      <div className="flex flex-row gap-2 justify-between w-full">
        <div className="flex flex-row gap-2">
          <p className="text-gray-400">{props.title}</p>
          <p className="text-gray-600">{props.items.length <= 1 ? `${props.items.length} issue` : `${props.items.length} issues`}</p>
        </div>
      </div>
      <div className="flex w-full flex-col pt-4">
        {props.items.map((item, _i) => (
          <div key={_i} className="w-full cursor-pointer group items-center justify-between first:rounded-t last:rounded-b h-auto hover:bg-gray-300/10 duration-300 bg-gray-400/10 border-t border-l border-r last:border-b border-white/10 px-4 py-2 flex flex-row gap-2">
            <div className="w-full h-auto flex flex-row justify-between">
              <div className="w-2/3 h-full flex flex-row gap-2 items-center">
                <div className="w-2 h-2 rounded-full group-hover:bg-indigo-600 bg-indigo-700 duration-300"></div>
                <p className="group-hover:text-gray-400 duration-300 text-gray-600 text-sm line-clamp-1 truncate pr-2">{item.ticketNumber}</p>
                <p className="line-clamp-1 w-3/4 md:w-full text-gray-400 group-hover:text-gray-300 text-sm duration-300">{item.title}</p>
              </div>
              <div className="flex gap-2 items-center w-1/3 justify-end">
                {item.tag && (
                  <div className={`${item.tag.color} px-2 rounded text-xs font-semibold group-hover:opacity-50 duration-300`}>
                    {item.tag.text}
                  </div>
                )}
                <p className="text-gray-400/80 text-xs bg-gray-600/50 px-2 rounded-full">{item.storyPoints}</p>
                {item.assignee && (
                  <div className="text-sm bg-indigo-700 px-2 rounded-full w-5 flex items-center group-hover:opacity-50 duration-300 justify-center">{item.assignee.charAt(0)}</div>
                )}
                {!item.assignee && (
                  <div className="text-sm px-2 rounded-full w-5 flex items-center justify-center"></div>
                )}
              </div>
            </div>
            {/*<div className="flex gap-2 items-center h-full w-full -pl-14">*/}
            {/*  /!*<div className="w-2 h-2 rounded-full group-hover:bg-indigo-600 bg-indigo-700 duration-300"></div>*!/*/}
            {/*  /!*<p className="group-hover:text-gray-400 duration-300 text-gray-600 text-sm">{item.ticketNumber}</p>*!/*/}
            {/*  <div className="text-sm flex flex-row gap-2 items-center text-gray-400 group-hover:text-gray-300 duration-300 w-full bg-orange-100">*/}
            {/*    <p className="truncate w-full">*/}
            {/*      {item.title}*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</div>*/}

          </div>
        ))}
      </div>
    </div>
  );
}

export default BoardTable;
