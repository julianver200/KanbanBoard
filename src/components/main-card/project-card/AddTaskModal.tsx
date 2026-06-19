import { useState } from "react";
import { X } from "lucide-react";
import { type Task } from "./TaskCards"; // Adjust this path if your TaskCards is in a different folder!

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  // We pass the task AND the name of the column it belongs to
  onAddTask: (task: Task, columnName: string) => void; 
}

const AddTaskModal = ({ isOpen, onClose, onAddTask }: AddTaskModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState<string>("Yet To Start"); 

  // ✅ The "Invisibility Cloak": If the switch is false, render nothing!
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: `TASK-${Math.floor(Math.random() * 10000)}`,
        title,
        description,
        priority,
        dueDate: dueDate || "No Date",
    };

    // Send both the task AND the chosen status (column name) back to Project.tsx
    onAddTask(newTask, status);

    // Reset all fields so the form is clean the next time you open it
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
    setStatus("Yet To Start"); 
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-2xl     px-4">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-foreground">Create New Task</h2>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="h-5 w-5" />
            </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Task Title *</label>
            <input 
                required 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="e.g. Design Homepage" 
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" 
            />
            </div>

            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Description</label>
                <textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    placeholder="Add some details..." 
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[80px] resize-none" 
                />
            </div>

            <div className="flex gap-4">
                {/* Status Dropdown */}
                <div className="flex flex-col gap-1.5 w-1/3">
                <label className="text-sm font-medium text-foreground">Status</label>
                <select 
                value={status} 
                onChange={(e) => setStatus(e.target.value)} 
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                <option value="Yet To Start">Yet To Start</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                </select>
            </div>

            {/* Priority Dropdown */}
            <div className="flex flex-col gap-1.5 w-1/3">
            <label className="text-sm font-medium text-foreground">Priority</label>
                <select 
                    value={priority} 
                    onChange={(e) => setPriority(e.target.value as "Low" | "Medium" | "High")} 
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            {/* Due Date Input */}
            <div className="flex flex-col gap-1.5 w-1/3">
                <label className="text-sm font-medium text-foreground">Due Date</label>
                <input 
                    type="text" 
                    value={dueDate} 
                    onChange={(e) => setDueDate(e.target.value)} 
                    placeholder="Oct 28" 
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" 
                />
                </div>
            </div>
            {/* Footer Buttons */}
            <div className="mt-4 flex justify-end gap-3">
                    <button 
                    type="button" 
                    onClick={onClose} 
                    className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
                    >
                    Cancel
                    </button>
                    <button 
                    type="submit" 
                    className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
                    >
                    Create Task
                    </button>
                </div>
                </form>
            </div>
        </div>
  );
};

export default AddTaskModal;