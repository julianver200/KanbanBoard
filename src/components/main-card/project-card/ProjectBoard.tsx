import BoardCard, { type Board } from "./BoardCard"

const ProjectBoard = ({ boards }: { boards: Board[] }) => {
    // const boards: Board[] = [
    //     { name: "Yet To Start", createdAt: new Date(), tasks: [] },
    //     { name: "In Progress", createdAt: new Date(), tasks: [] },
    //     { name: "Completed", createdAt: new Date(), tasks: [] }
    // ]
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