import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "../ui/input-group"
import { Search, Kanban, Plus } from "lucide-react"
import { ModeToggle } from "../../theme/mode-toggle"
import { Button } from "../ui/button"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/50 backdrop-blur-lg py-3">
            {/* Added w-full and mx-auto so the container stretches, allowing ml-auto to work */}
            <div className="flex w-full items-center px-6  gap-4">

                {/* Left: Logo */}
                <div className="flex items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Kanban className="h-5 w-5" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-primary ml-2">
                        KanBan
                    </span>
                </div>

                {/* Middle: Search */}
                <div className="flex flex-1 items-center max-w-xs">
                    <InputGroup className="w-full bg-muted/40 hover:bg-muted/60 focus-within:bg-background transition-all duration-200">
                        <InputGroupAddon align="inline-start">
                            <Search className="h-4 w-4 text-muted-foreground" />
                        </InputGroupAddon>
                        <InputGroupInput placeholder="Search board..." className="w-full text-sm" />
                    </InputGroup>
                </div>

                {/* Right: Actions (Pushed to the corner by ml-auto) */}
                <div className="ml-auto flex items-center gap-4">
                    <ModeToggle />
                    <div className="h-5 border-l border-border/60"></div>
                    <div>
                        <Button className="rounded-full gap-1.5 shadow-sm hover:shadow-md transition-all duration-200 font-semibold">
                            <Plus className="h-4 w-4" />
                            <span>Create Board</span>
                        </Button>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header