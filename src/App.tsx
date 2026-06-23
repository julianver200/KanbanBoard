import { useState } from "react"
import Header from "./components/layout/Header"
import Main from "./components/layout/Main"
import Footer from "./components/layout/Footer"
import { ThemeProvider } from "./theme/ThemeProvider"
import AddProjectModal from "./ProjectModal/AddProjectModal"
import { type Board } from "./components/main-card/project-card/BoardCard"
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

const App = () => {
  
  const [projects, setProjects] = useState<Project[]>([]);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  
  const handleAddProject = (newProjectName: string) => {
    const newProject: Project = {
      id: getNextProjectId(projects), 
      name: newProjectName,
      createdAt: new Date(),
      boards: [] 
    };
    
    setProjects([...projects, newProject]);
  };
  
  
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen bg-background">
        <Header onAddProjectClick={() => setIsProjectModalOpen(true)} />
        <Main/>
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