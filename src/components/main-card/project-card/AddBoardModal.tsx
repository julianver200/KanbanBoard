import { useState } from "react";
import { X } from "lucide-react";

// 1. Define the props this modal expects to receive
interface AddBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBoard: (boardName: string) => void;
}

const AddBoardModal = ({ isOpen, onClose, onAddBoard }: AddBoardModalProps) => {
  // 2. The local state to hold what the user types
  const [boardName, setBoardName] = useState("");

  // 3. Keep it hidden if the switch is off
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent empty submissions
    if (boardName.trim() === "") return;
    
    // Pass the typed name up to the parent component
    onAddBoard(boardName.trim());
    
    // Clean up and close
    setBoardName("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card w-full max-w-md p-6 rounded-xl border border-border shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">Create New Board (Column)</h2>
          <button
            onClick={() => { setBoardName(""); onClose(); }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">Board Name *</label>
            <input
              required
              autoFocus
              type="text"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              placeholder="e.g. To Do, In Progress, Blocked"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Footer Buttons */}
          <div className="mt-4 flex justify-end gap-3 pt-4 border-t border-border">
            <button
              type="button"
              onClick={() => { setBoardName(""); onClose(); }}
              className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              Create Board
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AddBoardModal;