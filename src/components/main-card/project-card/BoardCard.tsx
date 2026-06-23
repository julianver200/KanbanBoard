import TaskCards, { type Task } from "./TaskCards";
import { MoreVertical } from "lucide-react"

export interface Board {
  name: string,
  createdAt: Date,
  tasks: Task[]
};

const BoardCard = ({ board }: { board: Board }) => {
  const numberOfTasks = board.tasks?.length || 0;
  
  return (
    <div className='w-full py-2 border rounded-2xl px-2 flex flex-col h-[calc(100vh-280px)] min-h-[450px] md:h-[650px] bg-card/50'>
      
      <div className="flex py-2 px-5 rounded-lg w-full bg-muted shrink-0">
        <span className="font-bold truncate pr-2">
          {board.name}
        </span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-background font-medium shrink-0 ml-3">
          {numberOfTasks}
        </span>
        <button className="p-1.5 ml-auto hover:bg-background/80 rounded-md transition-colors text-muted-foreground hover:text-foreground shrink-0">
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>
      
      {/* Scrollbar hidden on the tasks container for a cleaner look */}
      <div className="mt-3 flex-1 overflow-y-auto pr-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <TaskCards tasks={board.tasks} />
      </div>
      
    </div>
    
  )
}

export default BoardCard;