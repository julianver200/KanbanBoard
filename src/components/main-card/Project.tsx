import { useState } from "react"
import ProjectHeader from "./ProjectHeader"
import ProjectBoard from "./project-card/ProjectBoard"
import { type Board } from "./project-card/BoardCard"

// 1. Keep your mock data defined outside the component so it doesn't 
// get recreated on every single render.
const mockBoards: Board[] = [
  {
    name: "Yet To Start",
    createdAt: new Date(),
    tasks: [
      { id: "TASK-1", title: "Design Homepage UI", priority: "High", comments: 3, attachments: 2, dueDate: "Oct 24" },
      { id: "TASK-2", title: "Research Competitor Pricing", priority: "Low", comments: 0, attachments: 0, dueDate: "Oct 28" }
    ]
  },
  {
    name: "In Progress",
    createdAt: new Date(),
    tasks: [
      { id: "TASK-3", title: "Fix Authentication Bug", description: "Users logged out randomly.", priority: "Medium", comments: 5, attachments: 1, dueDate: "Oct 26" }
    ]
  },
  {
    name: "Completed",
    createdAt: new Date(),
    tasks: [
        { id: "TASK-2", title: "Research Competitor Pricing", priority: "Low", comments: 0, attachments: 0, dueDate: "Oct 28" }
    ] 
  }
];

const Project = () => {
    // 2. Load the mock data into React State.
    // We type it as <Board[]> so TypeScript knows exactly what is inside.
    const [boards, setBoards] = useState<Board[]>(mockBoards);

    return (
        <div>
            <div>
                <ProjectHeader/>
            </div>
            <div>
                {/* 3. Pass the 'boards' state variable as the prop! */}
                <ProjectBoard boards={boards}/>
            </div>
        </div>
    )
}

export default Project