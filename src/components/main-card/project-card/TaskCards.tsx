// Removed MessageSquare and Paperclip from imports
import { Calendar, MoreHorizontal } from "lucide-react"

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  // Removed comments and attachments from here!
}

const TaskCards = ({ tasks = [] }: { tasks?: Task[] }) => {
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-500/10 text-red-500 dark:bg-red-500/20"; 
      case "Medium": return "bg-orange-500/10 text-orange-500 dark:bg-orange-500/20"; 
      case "Low": return "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  if (!tasks || tasks.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-transparent p-4 text-center">
        <p className="text-sm font-medium text-muted-foreground">
          No tasks yet
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {tasks.map((task) => (
        <div key={task.id} className="group cursor-grab rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
          <div className="mb-3 flex items-center justify-between">
            <span className={`rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wider ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
            <button className="text-muted-foreground hover:text-foreground opacity-0 transition-opacity group-hover:opacity-100">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          <h4 className="mb-1 text-sm font-semibold text-foreground">
            {task.title}
          </h4>
          {task.description && (
            <p className="mb-4 text-xs text-muted-foreground line-clamp-2">
              {task.description}
            </p>
          )}

          {/* FIXED: Removed the right-side div that held the comments and attachments! */}
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="h-3.5 w-3.5" />
              <span>{task.dueDate}</span>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default TaskCards