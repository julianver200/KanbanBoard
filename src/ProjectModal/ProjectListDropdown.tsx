import { useState } from "react";
import { Check, FolderKanban, Layers, Plus } from "lucide-react";
import { type Project } from "../App"; 

interface ProjectListDropdownProps {
  projects: Project[];
  activeProjectId: string;
  onSelectProject: (projectId: string) => void;
  onAddProjectClick: () => void;
}

const ProjectListDropdown = ({ projects, activeProjectId, onSelectProject, onAddProjectClick }: ProjectListDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex mb-[-0.2rem] h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-slate-700 hover:text-gray-100 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
      >
      <Layers className="h-[1.1rem] w-[1.1rem]" /> 
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute left-full top-2 ml-1 w-64 bg-card border border-border rounded-xl shadow-lg z-50 py-2 animate-in fade-in slide-in-from-left-2 duration-200">
            <div className="px-3 pb-2 mb-2 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Your Projects
            </div>
            
            <div className="max-h-[60vh] overflow-y-auto px-1">
              {projects?.map((project) => {
                const isActive = project.id === activeProjectId;
                return (
                  <button
                    key={project.id}
                    onClick={() => {
                      onSelectProject(project.id);
                      setIsOpen(false); 
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-colors text-left
                      ${isActive ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted"}
                    `}
                  >
                    <div className="flex items-center gap-2.5">
                      <FolderKanban className={`h-4 w-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="truncate">{project.name}</span>
                    </div>
                    {isActive && <Check className="h-4 w-4" />}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-border mt-2 pt-2 px-1">
              <button
                onClick={() => {
                  onAddProjectClick();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-primary hover:bg-primary/10 transition-colors text-left font-medium"
              >
                <Plus className="h-4 w-4" />
                <span>Create New Project</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectListDropdown;