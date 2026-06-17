import TaskCards, { type Task } from "./TaskCards";

export interface Board {
  name: string,
  createdAt: Date,
  tasks: Task[]
};

const BoardCard = ({ board }: { board: Board }) => {
  const numberOfTasks = board.tasks?.length || 0;
  
  return (
    <div className='w-full py-2 border rounded-2xl px-2 flex flex-col h-[600px]'>
      <div className="flex justify-between py-2 px-5 rounded-lg w-full bg-muted shrink-0">
        <span className="font-bold">
          {board.name}
        </span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted-foreground text-xs text-background font-medium">
          {numberOfTasks}
        </span>
      </div>
      <div className="mt-3 flex-1 overflow-y-auto pr-1">
        <TaskCards tasks={board.tasks} />
      </div>
      
    </div>
  )
}

export default BoardCard