import { useState } from "react"
import ProjectHeader from "./ProjectHeader"
import ProjectBoard from "./project-card/ProjectBoard"
import { type Task } from "./project-card/TaskCards"
import AddTaskModal from "./project-card/AddTaskModal"
import AddBoardModal from "./project-card/AddBoardModal"
import { KanbanSquare } from "lucide-react"
import { type Project as ProjectType } from "../../App"

interface ProjectProps {
    onAddProjectClick: () => void;
    projects: ProjectType[];
    activeProjectId: string;
    onSelectProject: (projectId: string) => void;
    onAddBoard: (projectId: string, boardName: string) => void;
    onAddTask: (projectId: string, targetColumn: string, task: Task) => void;
}

const Project = ({
    onAddProjectClick,
    projects,
    activeProjectId,
    onSelectProject,
    onAddBoard,
    onAddTask
}: ProjectProps) => {
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

    // Find the active project and its boards
    const activeProject = projects.find(p => p.id === activeProjectId);
    const boards = activeProject?.boards || [];

    const handleAddTask = (newTask: Task, targetColumn: string) => {
        if (activeProjectId) {
            onAddTask(activeProjectId, targetColumn, newTask);
        }
    };

    const handleAddBoard = (newBoardName: string) => {
        if (activeProjectId) {
            onAddBoard(activeProjectId, newBoardName);
        }
    };

    if (projects.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] min-h-[400px] w-full border-2 border-dashed border-border rounded-2xl bg-card/30 animate-in fade-in duration-500">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 animate-bounce">
                    <KanbanSquare className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-1.5">
                    No projects yet
                </h3>

                <p className="text-sm text-muted-foreground text-center max-w-sm mb-6">
                    Create a project to start organizing your Kanban boards and tasks.
                </p>

                <button
                    onClick={onAddProjectClick}
                    className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95"
                >
                    Create Your First Project
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            <div className="mb-4">
                <ProjectHeader
                    onAddTaskClick={() => setIsTaskModalOpen(true)}
                    onAddBoardClick={() => setIsBoardModalOpen(true)}
                    onAddProjectClick={onAddProjectClick}
                    projects={projects}
                    activeProjectId={activeProjectId}
                    onSelectProject={onSelectProject}
                />
            </div>

            <div className="flex-1 w-full overflow-y-auto mt-2 pr-1">
                {boards && boards.length > 0 ? (
                    // IF TRUE: Show the boards
                    <ProjectBoard boards={boards} />
                ) : (
                    // IF FALSE: Show this beautiful Empty State!
                    <div className="flex flex-col items-center justify-center h-[calc(100vh-250px)] min-h-[350px] w-full border-2 border-dashed border-border rounded-2xl bg-card/30 animate-in fade-in duration-500">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                            <KanbanSquare className="h-7 w-7" />
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-1.5">
                            No boards yet
                        </h3>

                        <p className="text-sm text-muted-foreground text-center max-w-sm">
                            This project is currently empty. Click the "Add Board" button above to start organizing your workflow!
                        </p>

                    </div>
                )}
            </div>

            <AddTaskModal
                isOpen={isTaskModalOpen}
                onClose={() => setIsTaskModalOpen(false)}
                onAddTask={handleAddTask}
                columns={boards.map(board => board.name)}
            />
            <AddBoardModal
                isOpen={isBoardModalOpen}
                onClose={() => setIsBoardModalOpen(false)}
                onAddBoard={handleAddBoard}
            />
        </div>
    )
}

export default Project