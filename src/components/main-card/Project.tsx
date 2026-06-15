import { Button } from "../ui/button"

const Project = () => {
    return (
    <div>
        <div className="flex flex-row w-full gap-2 pl-6 pr-6 border">
            <div className="p-2"><h1 className="text-xl">Projects</h1></div>
            <div className="flex ml-auto gap-4">
                <div className="pt-3 pb-3">AZ Sort</div>
                <button type="button">
                    A-Z
                </button>
                <Button className="mt-1.5 mb-1 rounded-full">Add New Task</Button>
            </div>
        </div>
        <div>

        </div>
    </div>
    )
}

export default Project