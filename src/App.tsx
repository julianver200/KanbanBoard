import { useState, useEffect } from "react"
import Header from "./components/layout/Header"
import Main from "./components/layout/Main"
import Footer from "./components/layout/Footer"
import { ThemeProvider } from "./theme/ThemeProvider"
import AddProjectModal from "./ProjectModal/AddProjectModal"
import { type Board } from "./components/main-card/project-card/BoardCard"
import { type Task } from "./components/main-card/project-card/TaskCards"

export interface Project {
  id: string;
  name: string; // e.g., "Website Redesign", "Mobile App Launch"
  createdAt: Date;
  boards: Board[]; // The specific columns that belong to THIS project
}

const getNextProjectId = (currentProjects: Project[]) => {
  if (currentProjects.length === 0) return "PROJ-1";
  
  // Extract just the numbers from "PROJ-1", "PROJ-2", etc.
  const idNumbers = currentProjects.map((p) => parseInt(p.id.split("-")[1]));
  
  // Find the highest number and add 1
  const maxNumber = Math.max(...idNumbers);
  return `PROJ-${maxNumber + 1}`;
};

interface SerializedBoard {
  name: string;
  createdAt: string;
  tasks: Task[];
}

interface SerializedProject {
  id: string;
  name: string;
  createdAt: string;
  boards: SerializedBoard[];
}

const App = () => {
  // Load initial projects from localStorage
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem("kanban_projects");
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as SerializedProject[];
        // Convert createdAt strings back to Date objects
        return parsed.map((p) => ({
          ...p,
          createdAt: new Date(p.createdAt),
          boards: p.boards.map((b) => ({
            ...b,
            createdAt: new Date(b.createdAt),
          }))
        }));
      } catch (e) {
        console.error("Error parsing saved projects:", e);
      }
    }
    return [];
  });

  const [activeProjectId, setActiveProjectId] = useState<string>(() => {
    const savedActive = localStorage.getItem("kanban_active_project_id");
    return savedActive || "";
  });

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // Compute the effective active project ID without synchronous effect updates
  const effectiveActiveProjectId = activeProjectId || (projects[0]?.id || "");

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("kanban_projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("kanban_active_project_id", effectiveActiveProjectId);
  }, [effectiveActiveProjectId]);

  const handleAddProject = (newProjectName: string) => {
    const newProjectId = getNextProjectId(projects);
    const newProject: Project = {
      id: newProjectId, 
      name: newProjectName,
      createdAt: new Date(),
      boards: [] 
    };
    
    setProjects([...projects, newProject]);
    setActiveProjectId(newProjectId);
  };

  const handleAddBoard = (projectId: string, boardName: string) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id === projectId) {
          const newBoard: Board = {
            name: boardName,
            createdAt: new Date(),
            tasks: []
          };
          return {
            ...p,
            boards: [...p.boards, newBoard]
          };
        }
        return p;
      })
    );
  };

  const handleAddTask = (projectId: string, targetColumn: string, task: Task) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id === projectId) {
          return {
            ...p,
            boards: p.boards.map((b) => {
              if (b.name === targetColumn) {
                return {
                  ...b,
                  tasks: [...b.tasks, task]
                };
              }
              return b;
            })
          };
        }
        return p;
      })
    );
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen bg-background">
        <Header onAddProjectClick={() => setIsProjectModalOpen(true)} />
        <Main
          onAddProjectClick={() => setIsProjectModalOpen(true)}
          projects={projects}
          activeProjectId={effectiveActiveProjectId}
          onSelectProject={setActiveProjectId}
          onAddBoard={handleAddBoard}
          onAddTask={handleAddTask}
        />
        <Footer />
        <AddProjectModal
            isOpen={isProjectModalOpen}
            onClose={() => setIsProjectModalOpen(false)}
            onAddProject={handleAddProject}
        />
      </div>
    </ThemeProvider>
  )
}

export default App