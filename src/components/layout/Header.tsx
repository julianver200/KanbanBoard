import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "../ui/input-group"
import { Search, Kanban } from "lucide-react"
import { ModeToggle } from "../../theme/mode-toggle"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md py-4">
            <div className="flex items-center px-6 max-w-7xl mx-auto gap-4">
                <div className="flex items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Kanban className="h-5 w-5" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-primary ml-2">
                        KanBan
                    </span>
                </div>

                <div className="flex flex-1 items-center max-w-xs">
                    <InputGroup className="w-full bg-muted/40 hover:bg-muted/60 focus-within:bg-background transition-all duration-200">
                        <InputGroupAddon align="inline-start">
                            <Search className="h-4 w-4 text-muted-foreground" />
                        </InputGroupAddon>
                        <InputGroupInput placeholder="Search board..." className="w-full text-sm" />
                    </InputGroup>
                </div>

                <div className="ml-auto flex items-center gap-4">
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header
