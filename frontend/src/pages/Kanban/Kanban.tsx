import BoardTable, {BoardTableItem} from "../../components/Board/BoardTable/BoardTable";
import React from "react";
import { motion } from "framer-motion";
import BoardList from "../../components/Board/BoardList/BoardList";


const BoardItems: BoardTableItem[] = [
  {
    title: "Migrate the landing page over to react",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-01",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe",
    image: "https://placehold.co/600x400/EEE/31343C"
  },
  {
    title: "Tech Review: Understand the difference between React and Angular",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-02",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe"
  }
];
const InReviewBoardTable: BoardTableItem[] = [
  {
    title: "Migrate the landing page over to react",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-01",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe",
    image: "https://placehold.co/600x400/EEE/31343C"
  },
  {
    title: "Tech Review: Understand the difference between React and Angular",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-02",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe"
  },
  {
    title: "Tech Review: Understand the difference between React and Angular",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-02",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe"
  },
  {
    title: "Tech Review: Understand the difference between React and Angular",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-02",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe"
  },
  {
    title: "Tech Review: Understand the difference between React and Angular",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-02",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe"
  },
  {
    title: "Tech Review: Understand the difference between React and Angular",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-02",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe"
  }
];

const InProgressBoardTable: BoardTableItem[] = [
  {
    title: "Migrate the landing page over to react",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-01",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe",
    image: "https://placehold.co/600x400/EEE/31343C"
  },
  {
    title: "Tech Review: Understand the difference between React and Angular",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-02",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe"
  },
  {
    title: "Tech Review: Understand the difference between React and Angular",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-02",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe"
  },
  {
    title: "Tech Review: Understand the difference between React and Angular",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-02",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe"
  },
  {
    title: "Tech Review: Understand the difference between React and Angular",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-02",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe"
  }
];

const MergedBoardTable: BoardTableItem[] = [
  {
    title: "Migrate the landing page over to react",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-01",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe",
    image: "https://placehold.co/600x400/EEE/31343C"
  },
  {
    title: "Tech Review: Understand the difference between React and Angular",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-02",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe"
  },
  {
    title: "Tech Review: Understand the difference between React and Angular",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-02",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe"
  },
  {
    title: "Tech Review: Understand the difference between React and Angular",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-02",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe"
  },
  {
    title: "Tech Review: Understand the difference between React and Angular",
    description: "Create a new project",
    markdown: "Create a new project",
    ticketNumber: "TBA-02",
    type: "bug",
    priority: 1,
    storyPoints: 1,
    assignee: "John Doe"
  }
];





const Kanban: React.FunctionComponent = () => {
  return (
    <>
      <motion.div
        animate={{
          opacity: [0, 100],
        }}
        transition={{
          duration: 1
        }}
      >
        <div className="flex flex-row gap-2 w-full h-screen overflow-x-scroll relative p-8">
          <div className="flex flex-row gap-2">
            <BoardList title={"To do"} items={BoardItems} />
            <BoardList title={"In Progress"} items={InProgressBoardTable} />
            <BoardList title={"In Review"} items={InReviewBoardTable} />
            <BoardList title={"Merged"} items={MergedBoardTable} />
          </div>
        </div>
      </motion.div>
    </>
  )
}
export default Kanban;
