import { Button } from "../ui/button"
import ProjectSortingButton from "../drop-down/ProjectSortingButton"
const ProjectHeader = () => {
  return (
    <div>
         <div className="flex flex-row w-full gap-2 px-2 border">
            <div className="p-2"><h1 className="text-[1.2rem]">Projects</h1></div>
            <div className="flex ml-auto gap-4">
                <div className="py-4 text-[10px]">AZ Sort</div>
                <ProjectSortingButton/>
                <Button className="mt-1.5 mb-1 rounded-full">Add New Task</Button>
            </div>
        </div>
    </div>
  )
}

export default ProjectHeader