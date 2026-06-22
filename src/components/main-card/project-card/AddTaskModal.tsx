import { useState } from "react";
import { X } from "lucide-react";
import { type Task } from  "./TaskCards"

interface AddTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddTask: (task: Task, columnName: string) => void;
}

const AddTaskModal = ({ isOpen, onClose, onAddTask }: AddTaskModalProps) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low");
    const [dueDate, setDueDate] = useState("");
    const [status, setStatus] = useState<string>("Yet To Start");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    let formattedDate = "No Date";
    if (dueDate) {
        const dateObj = new Date(dueDate);
        formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    const newTask: Task = {
        id: `TASK-${Math.floor(Math.random() * 10000)}`,
        title,
        description,
        priority,
        dueDate: formattedDate, 
    };
    onAddTask(newTask, status);

    setTitle("");
    setDescription("");
    setPriority("Low");
    setDueDate("");
    setStatus("Yet To Start");
    onClose();
};

return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 rounded-2xl">

        <div className="bg-card w-full max-w-md p-6 rounded-xl border border-border shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Create New Task</h2>
            <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
            >
                <X className="h-5 w-5" />
            </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Task Title *</label>
            <input
                required
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Design Homepage"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
        </div>
        <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Description</label>
                <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add some details..."
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[80px] resize-none"
                />
            </div>

        <div className="grid grid-cols-2 gap-4">
            
            {/* Status Dropdown */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                    <option value="Yet To Start">Yet To Start</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Priority</label>
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as "Low" | "Medium" | "High")}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

        </div>

        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Due Date</label>
            <input
            type="date" 
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 [&::-webkit-calendar-picker-indicator]:dark:invert"
            />
        </div>

        <div className="mt-4 flex justify-end gap-3 pt-4 border-t border-border">
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