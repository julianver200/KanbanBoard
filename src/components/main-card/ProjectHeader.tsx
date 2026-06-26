import { Button } from "../ui/button"
import ProjectSortingButton from "../drop-down/ProjectSortingButton";
import {Plus  } from "lucide-react";
import { type Project } from "@/App";
import ProjectListDropdown from "@/ProjectModal/ProjectListDropdown";


interface ProjectHeaderProps {
  onAddTaskClick: () => void;
  onAddBoardClick: () => void;
  onAddProjectClick: () => void;
  projects: Project[];
  activeProjectId: string;
  onSelectProject: (projectId: string) => void;
}

const ProjectHeader = ({ 
  onAddTaskClick, 
  onAddBoardClick,
  onAddProjectClick,
  projects,
  activeProjectId,
  onSelectProject
}: ProjectHeaderProps) => {
  return (
    <div className="flex flex-row w-full mt-[-0.5rem] px-2  ">
        <div className="p-2 flex items-center gap-2.5">
          <h1 className="text-[1.3rem] font-semibold">Projects</h1>
          <div className="flex mb-[-0.2rem] h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-slate-700 hover:text-gray-100 transition-colors cursor-pointer">
            <ProjectListDropdown 
              projects={projects}
              activeProjectId={activeProjectId}
              onSelectProject={onSelectProject}
              onAddProjectClick={onAddProjectClick}
            />
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