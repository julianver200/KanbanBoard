import { Calendar, MessageSquare, Paperclip, MoreHorizontal } from "lucide-react"

// 1. Define the shape of our task data
export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: "Low" | "Medium" | "High";
  comments: number;
  attachments: number;
  dueDate: string;
}

// 2. Create some dummy data to test the layout


const TaskCards = ({ tasks}: { tasks?: Task[] }) => {
  
  // Helper function to color-code priorities
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": 
        // Added bg-red-500/10 (or bg-destructive/20) for the background!
        return "bg-red-500/10 text-red-500 dark:bg-red-500/20"; 
      case "Medium": 
        return "bg-orange-500/10 text-orange-500 dark:bg-orange-500/20"; 
      case "Low": 
        return "bg-primary/10 text-primary";
      default: 
        return "bg-muted text-muted-foreground";
    }
  };
  if (!tasks || tasks.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center align-middle rounded-lg bg-transparent p-4 text-center">
        <p className="text-sm font-medium text-muted-foreground">
          No tasks yet!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <div 
          key={task.id} 
          // Group allows us to show the '...' menu only when hovering over the card
          className="group cursor-grab rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
        >
          {/* Header: Priority Badge & Options Menu */}
          <div className="mb-3 flex items-center justify-between">
            <span className={`rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wider ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
            <button className="text-muted-foreground hover:text-foreground opacity-0 transition-opacity group-hover:opacity-100">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          {/* Body: Title & Optional Description */}
          <h4 className="mb-1 text-sm font-semibold text-foreground">
            {task.title}
          </h4>
          {task.description && (
            <p className="mb-4 text-xs text-muted-foreground line-clamp-2">
              {task.description}
            </p>
          )}

          {/* Footer: Due Date & Meta Counters */}
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="h-3.5 w-3.5" />
              <span>{task.dueDate}</span>
            </div>
            
            <div className="flex items-center gap-3">
              {task.comments > 0 && (
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>{task.comments}</span>
                </div>
              )}
              {task.attachments > 0 && (
                <div className="flex items-center gap-1">
                  <Paperclip className="h-3.5 w-3.5" />
                  <span>{task.attachments}</span>
                </div>
              )}
            </div>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default TaskCards