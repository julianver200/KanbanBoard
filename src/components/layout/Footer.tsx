import { Terminal } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/60 bg-muted/10 py-4 mt-auto">
      <div className="mx-auto flex max-w-[1600px] flex-col sm:flex-row items-center justify-between gap-4 px-6 md:px-12 text-[10px] text-muted-foreground font-medium">
        <div className="flex items-center gap-1.5 select-none">
          <Terminal className="h-3.5 w-3.5 text-primary" />
          <span>Hotdog</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 select-none">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>All systems operational</span>
          </div>
          <div className="h-3 border-l border-border/50"></div>
          <span>v1.0.0-beta</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
