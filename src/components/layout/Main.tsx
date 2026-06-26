import Project from "../main-card/Project"
import ProjectOverview from "../main-card/ProjectOverview"
import { type Project as ProjectType } from "../../App"
import { type Task } from "../main-card/project-card/TaskCards"

interface MainProps {
  onAddProjectClick: () => void;
  projects: ProjectType[];
  activeProjectId: string;
  onSelectProject: (projectId: string) => void;
  onAddBoard: (projectId: string, boardName: string) => void;
  onAddTask: (projectId: string, targetColumn: string, task: Task) => void;
}

const Main = ({ 
  onAddProjectClick, 
  projects, 
  activeProjectId, 
  onSelectProject,
  onAddBoard,
  onAddTask
}: MainProps) => {
  const activeProject = projects.find(p => p.id === activeProjectId);

  return (
    // Note: Using the full-height and flex-col layout we built earlier!
    <main className="relative h-[calc(100vh-4.5rem)] w-full overflow-hidden bg-gray-200 dark:bg-background px-4 py-6 md:px-6 flex flex-col">
      
      {/* Ambient background glows for visual richness */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl dark:bg-primary/5" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[28rem] w-[28rem] rounded-full bg-chart-2/10 blur-3xl dark:bg-chart-2/4" />

      {/* Edge-to-edge stretching layout */}
      <div className="relative mx-auto flex h-full w-full flex-col gap-6 lg:flex-row">
        
        {/* Project Section */}
        <section className="flex flex-col w-full lg:w-[68%] xl:w-[75%] h-full rounded-2xl border border-border bg-card dark:bg-card/20 backdrop-blur-md p-4 shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden">
          
          <Project 
            onAddProjectClick={onAddProjectClick}
            projects={projects}
            activeProjectId={activeProjectId}
            onSelectProject={onSelectProject}
            onAddBoard={onAddBoard}
            onAddTask={onAddTask}
          />
          
        </section>
        
        {/* Overview Section */}
        <section className="flex flex-col w-full lg:w-[32%] xl:w-[25%] h-full rounded-2xl border border-border bg-card dark:bg-card/20 backdrop-blur-md p-5 shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden">
          <ProjectOverview activeProject={activeProject} />
        </section>
        
      </div>
    </main>
  )
}

export default Main;