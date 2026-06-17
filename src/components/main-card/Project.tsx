import ProjectHeader from "./ProjectHeader"
import ProjectBoard from "./project-card/ProjectBoard"


const Project = () => {
    return (
    <div>
        <div>
            <ProjectHeader/>
        </div>
        <div>
            <ProjectBoard/>
        </div>
    </div>
    )
}

export default Project