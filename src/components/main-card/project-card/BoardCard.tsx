

export interface Board {
  name: string,
  createdAt: Date,
  tasks: string[]
};

const BoardCard = ({ board }: { board: Board }) => {
  const numberOfTasks = board.tasks.length;
  return (
    <div className='w-full h-full  py-2'>
      <div className="flex justify-between py-2 px-4 rounded-lg w-full h-full bg-muted">
        <span className="font-bold">
          {board.name}
        </span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted-foreground text-xs text-background font-medium">
          {numberOfTasks}
        </span>
      </div>
    </div>
  )
}

export default BoardCard