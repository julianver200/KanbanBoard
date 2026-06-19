import Project from "../main-card/Project"
import ProjectOverview from "../main-card/ProjectOverview"

const Main = () => {
  return (
    
    <main className="relative min-h-[calc(100vh-4.5rem)] w-full overflow-hidden bg-gray-200 dark:bg-background px-4 py-6 md:px-8 lg:px-12">
      
      {/* Ambient background glows for visual richness */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl dark:bg-primary/5" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[28rem] w-[28rem] rounded-full bg-chart-2/10 blur-3xl dark:bg-chart-2/4" />

      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-6 lg:flex-row">
        <section className="w-full lg:w-[68%] rounded-2xl border border-border bg-card dark:bg-card/20 backdrop-blur-md p-4 shadow-sm transition-all duration-300 hover:shadow-md">
          <Project />
        </section>
        <section className="w-full lg:w-[32%] rounded-2xl border border-border bg-card dark:bg-card/20 backdrop-blur-md p-5 shadow-sm transition-all duration-300 hover:shadow-md">
          <ProjectOverview />
        </section>
      </div>
    </main>
  )
}

export default Main