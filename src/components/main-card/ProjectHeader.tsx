import { Button } from "../ui/button"
import ProjectSortingButton from "../drop-down/ProjectSortingButton";
import {Plus, Layers } from "lucide-react";


interface ProjectHeaderProps {
  onAddTaskClick: () => void;
  onAddBoardClick: () => void;
}

const ProjectHeader = ({ onAddTaskClick, onAddBoardClick}: ProjectHeaderProps) => {
  return (
    <div className="flex flex-row w-full mt-[-0.5rem] px-2  ">
        <div className="p-2 flex items-center gap-2.5">
          {/* Optional: A nice subtle background tint for the icon! */}
          <h1 className="text-[1.3rem] font-semibold">Projects</h1>
          {/* Move the hover effects, text color, and a smooth transition to the parent div! */}
          <div className="flex mb-[-0.2rem] h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-slate-700 hover:text-gray-100 transition-colors cursor-pointer">
            <Layers className="h-[1.2rem] w-[1.2rem]" /> 
          </div>
          
        </div>
        <div className="flex ml-auto gap-4">
            <ProjectSortingButton/>
            <Button 
              onClick={onAddBoardClick}
              className="mt-1.5 mb-1 rounded-full">
              <Plus/>
              Add Board
            </Button>
            <Button 
              onClick={onAddTaskClick}
              className="mt-1.5 mb-1 rounded-full">
              <Plus/>
              Add New Task
            </Button>
        </div>
    </div>
  )
}

export default ProjectHeader