import { useState } from "react";
import { Button } from "../ui/button"
import { ArrowUpDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

const options = ["A - Z", "Z - A"];

const ProjectSortingButton = () => {
  const [selectedOption, setSelectedOption] = useState("A - Z");

  return (
    <div className="flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 gap-1.5 border border-border bg-card/60 hover:bg-muted font-medium rounded-lg text-xs shadow-xs transition-all duration-150">
            <ArrowUpDown className="h-3.5 w-3.5 text-muted-foreground" />
            <span>Sort: {selectedOption}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32 bg-popover/95 backdrop-blur-md">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Sort Tasks</DropdownMenuLabel>
            {options.map((option, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => setSelectedOption(option)}
                className="hover:cursor-pointer text-xs focus:bg-accent focus:text-accent-foreground"
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ProjectSortingButton
