import { type Project } from "../../App"
import { Calendar, ListTodo, Columns, BarChart3, Clock } from "lucide-react"

interface ProjectOverviewProps {
  activeProject?: Project;
}

const ProjectOverview = ({ activeProject }: ProjectOverviewProps) => {
  if (!activeProject) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground mb-3">
          <BarChart3 className="h-6 w-6" />
        </div>
        <h4 className="text-sm font-semibold text-foreground">No active project</h4>
        <p className="text-xs text-muted-foreground mt-1 max-w-[200px]">
          Create or select a project to view its metrics and overview.
        </p>
      </div>
    );
  }

  // Calculate statistics
  const totalBoards = activeProject.boards?.length || 0;
  const totalTasks = activeProject.boards?.reduce((acc, board) => acc + (board.tasks?.length || 0), 0) || 0;
  
  // Format creation date
  const createdDate = activeProject.createdAt
    ? new Date(activeProject.createdAt).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    : 'Unknown';

  return (
    <div className="flex flex-col h-full space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-lg font-bold text-foreground truncate">{activeProject.name}</h3>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1 font-medium">
          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
          <span>Created on {createdDate}</span>
        </div>
      </div>

      <div className="h-px bg-border/60 w-full" />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col p-3 rounded-xl bg-muted/40 border border-border/50">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground mb-1">
            <Columns className="h-3.5 w-3.5 text-primary" />
            <span>Columns</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">{totalBoards}</span>
        </div>
        
        <div className="flex flex-col p-3 rounded-xl bg-muted/40 border border-border/50">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground mb-1">
            <ListTodo className="h-3.5 w-3.5 text-emerald-500" />
            <span>Total Tasks</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">{totalTasks}</span>
        </div>
      </div>

      {/* Column Breakdown */}
      <div className="flex-1 flex flex-col min-h-0">
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Columns Breakdown
        </h4>
        
        {totalBoards === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 rounded-xl border border-dashed border-border/60 p-4 text-center">
            <Clock className="h-5 w-5 text-muted-foreground/60 mb-2" />
            <span className="text-xs text-muted-foreground">No columns created yet.</span>
          </div>
        ) : (
          <div className="space-y-3 overflow-y-auto pr-1 flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {activeProject.boards.map((board, index) => {
              const taskCount = board.tasks?.length || 0;
              const percentage = totalTasks > 0 ? (taskCount / totalTasks) * 100 : 0;
              
              return (
                <div key={index} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-foreground truncate max-w-[150px]">{board.name}</span>
                    <span className="text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded text-[10px]">
                      {taskCount} {taskCount === 1 ? 'task' : 'tasks'}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary/80 rounded-full transition-all duration-500" 
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectOverview;