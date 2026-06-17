import { Button } from "../ui/button"
import ProjectSortingButton from "../drop-down/ProjectSortingButton";
import {Plus } from "lucide-react";

const ProjectHeader = () => {
  return (
    <div className="flex flex-row w-full mt-[-0.5rem] px-2  ">
        <div className="p-2"><h1 className="text-[1.2rem]">Projects</h1></div>
        <div className="flex ml-auto gap-4">
            <ProjectSortingButton/>
            <Button className="mt-1.5 mb-1 rounded-full">
              <Plus/>
              Add New Task
            </Button>
        </div>
    </div>
  )
}

export default ProjectHeader