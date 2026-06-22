import { useState } from "react"
import ProjectHeader from "./ProjectHeader"
import ProjectBoard from "./project-card/ProjectBoard"
import { type Board } from "./project-card/BoardCard"
import { type Task } from "./project-card/TaskCards"
import AddTaskModal from "./project-card/AddTaskModal"

// 1. Keep your mock data defined outside the component so it doesn't 
// get recreated on every single render.
const mockBoards: Board[] = [
  {
    name: "Yet To Start",
    createdAt: new Date(),
    tasks: [
      { 
        id: "TASK-1", 
        title: "Design Homepage UI", 
        priority: "High", 
        dueDate: "Oct 24" 
      },
      { 
        id: "TASK-2", 
        title: "Research Competitor Pricing", 
        priority: "Low", 
        dueDate: "Oct 28" 
      }
    ]
  },
  {
    name: "In Progress",
    createdAt: new Date(),
    tasks: [
      { 
        id: "TASK-3", 
        title: "Fix Authentication Bug", 
        description: "Users logged out randomly.", 
        priority: "Medium", 
        dueDate: "Oct 26" 
      }
    ]
  },
  {
    name: "Completed",
    createdAt: new Date(),
    tasks: [
      { 
        id: "TASK-4", 
        title: "Finalize Deployment Docs", 
        priority: "Low", 
        dueDate: "Oct 28" 
      }
    ] 
  }
];

const Project = () => {
    const [boards, setBoards] = useState<Board[]>(mockBoards);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddTask = (newTask: Task, targetColumn: string) => {
        setBoards((currentBoards) => {
            return currentBoards.map((board) => {
                if (board.name === targetColumn) {
                    return {
                        ...board,
                        tasks: [...board.tasks, newTask] 
                    };
                }
                return board;
            });
        });
    };

    return (
        <div>
            <div className="mb-4">
                <ProjectHeader onAddTaskClick={() => setIsModalOpen(true)} />
            </div>
            
            <div>
                <ProjectBoard boards={boards}/>
            </div>

            <AddTaskModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
              onAddTask={handleAddTask} 
            />
        </div>
    )
}

export default Project