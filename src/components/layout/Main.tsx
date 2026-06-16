import Project from "../main-card/Project"
import ProjectOverview from "../main-card/ProjectOverview"

const Main = () => {
  return (
    <main className="mt-2 w-full border border-border bg-background/95 backdrop-blur-md px-12 py-4">
      <div className="flex flex-row w-full gap-2 px-6">
        <div className="w-[70%]">
          <Project/>
        </div>
        <div className="w-[30%]">
          <ProjectOverview/>
        </div>
      </div>
    </main>
  )
}

export default Main