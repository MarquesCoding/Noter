import TicketList, { BoardTableItem } from "../../../components/core/TicketList/TicketList"

const BoardItems: BoardTableItem[] = [
    {
        title: "Quick booking for accommodation using the new handler that was implemented",
        description: "Create a new project",
        markdown: "Create a new project",
        ticketNumber: "TBA-01",
        type: "bug",
        priority: 1,
        storyPoints: 1,
        assignee: "John Doe",
        tag: {
            color: "bg-red-400",
            text: "Backend"
        }
    },
    {
        title: "Add a new feature to the app",
        description: "Create a new project",
        markdown: "Create a new project",
        ticketNumber: "TBA-02",
        type: "bug",
        priority: 1,
        storyPoints: 1,
        assignee: "John Doe",
        tag: {
            color: "bg-indigo-400",
            text: "Frontend"
        }
    }
];
const Default = () => {
    return (
        <div className="relative left-[88px] overflow-auto mb-12 font-light text-white flex flex-col px-24 py-12 w-[calc(100vw-88px)] lg:w-[calc(100vw-18rem)] h-screen duration-300 lg:left-[18rem]">
            <div className="w-full h-auto  flex flex-row gap-2 justify-end">
                <div className="w-8 h-8 rounded bg-gray-500/50 flex items-center justify-center hover:bg-opacity-50 cursor-pointer">
                    L
                </div>
                <div className="w-8 h-8 rounded bg-gray-500/50 flex items-center justify-center hover:bg-opacity-50 cursor-pointer">
                    K
                </div>
            </div>
            <TicketList title={"Support Tickets"} items={BoardItems}/>
        </div>
    )
}

export default Default;