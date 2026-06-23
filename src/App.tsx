import { useState } from "react"
import Header from "./components/layout/Header"
import Main from "./components/layout/Main"
import Footer from "./components/layout/Footer"
import { ThemeProvider } from "./theme/ThemeProvider"
import { type Board } from "./components/main-card/project-card/BoardCard"
import AddProjectModal from "./addBoardModal/AddProjectModal"

const mockProjects: Board[] = [
  {
    name: "Yet To Start",
    createdAt: new Date(),
    tasks: []
  }
];

const App = () => {
  
// 1. The switch for the Add Project Modal
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // 2. The function that actually handles saving the new project
  const handleAddProject = (newProjectName: string) => {
    // For now, let's just log it to make sure it works! 
    // Later, you can add this to an array of projects.
    console.log("New Project Created:", newProjectName);
    
    // TODO: Add logic to update project state here
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