import BoardCard, { type Board } from "./BoardCard"

const ProjectBoard = ({ boards }: { boards: Board[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-x-3 gap-y-1">
            {boards.map((board, index) => (
                <BoardCard 
                key={index} 
                board={board} />
                ))}
                
        </div>
    )
}

export default ProjectBoard